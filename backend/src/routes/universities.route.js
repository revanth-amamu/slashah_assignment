const express = require("express");
const database = require("../config/db");
const ensureTable = require("../middlewares/tables");
const universitiesRouter = express.Router();

universitiesRouter.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    const response = await fetch(
      `http://universities.hipolabs.com/search?country=india&name=${name}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error searching universities: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

universitiesRouter.post("/favorites", ensureTable, (req, res) => {
  const { name, stateProvince, webPages } = req.body;
  const query =
    "INSERT INTO favorites (name, state_province, web_pages) VALUES (?, ?, ?)";
  database.query(query, [name, stateProvince, webPages], (err, result) => {
    if (err) {
      console.error("Error saving favorite: ", err);
      res.status(500).json({ message: "Failed to save favorite" });
    } else {
      res.json({ message: "Favorite saved successfully" });
    }
  });
});

module.exports = universitiesRouter;
