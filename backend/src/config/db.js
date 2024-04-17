const mysql = require('mysql');

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'slashashDB'
});

module.exports = database;