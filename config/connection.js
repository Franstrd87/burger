var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "n6m3z2yqas5t0npl",
    database: "burgers_db"
  });
};
connection.connect();
module.exports = connection;