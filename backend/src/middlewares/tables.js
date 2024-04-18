const database = require("../config/db");

function ensureTable(req, res, next) {
  const query =
    `CREATE TABLE IF NOT EXISTS favourites(
        id int AUTO_INCREMENT PRIMARY KEY, 
        name varchar(255), 
        state_province varchar(255), 
        web_pages text
    )`;
  database.query(query, (err) => {
    if (err) {
      console.error("Error creating table: ", err);
      res.status(500).json({ message: "Internal server error" });
    } else {
      next();
    }
  });
}

module.exports = ensureTable;