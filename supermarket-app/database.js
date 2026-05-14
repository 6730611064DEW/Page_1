const mysql = require('mysql2');

const dbcon = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'supermarket_db',
  waitForConnections: true,
  connectionLimit: 10,
}).promise();

module.exports = dbcon;