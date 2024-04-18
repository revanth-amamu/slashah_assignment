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

universitiesRouter.post("/favourites", ensureTable, (req, res) => {
  try {
    const { name, stateProvince, webPages } = req.body;
    const webPagesString = JSON.stringify(webPages);
    const query =
      "INSERT INTO favourites (name, state_province, web_pages) VALUES (?, ?, ?)";
    database.query(query, [name, stateProvince, webPagesString], (err, result) => {
      if (err) {
        console.error("Error saving favorite: ", err);
        res.status(500).json({ message: "Failed to save favorite" });
      } else {
        res.json({ message: "Favorite saved successfully" });
      }
    });
  } catch (error) {
    console.error("Error saving favorite: ", error);
    res.status(500).json({ message: "Failed to save favorite" });
  }
});

universitiesRouter.get('/favourites', async (req, res) => {
  try {
    const query = 'SELECT * FROM favourites';
    database.query(query, (err, result) => {
      if (err) {
        console.error('Error fetching favourites:', err);
        res.status(500).json({ message: 'Internal server error' });
      } else {
        // Deserialize the web_pages column from string to array
        const favourites = result.map(favorite => ({
          ...favorite,
          web_pages: JSON.parse(favorite.web_pages)
        }));
        res.json(favourites);
      }
    });
  } catch (error) {
    console.error('Error fetching favourites:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = universitiesRouter;
