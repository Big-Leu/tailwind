// Import required modules
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
// Create an Express application
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = 8080;

// Create a connection pool to the database
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "database-1.csp1othqqk7b.ap-south-1.rds.amazonaws.com",
  user: "root",
  password: "abhi9889",
  database: "db1",
});

// Define a route to fetch data from the database
app.get("/info", (req, res) => {
  // Get a connection from the pool
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error getting connection from pool:", err);
      res.status(500).send("Internal Server Error");
      return;
    }

    // Perform a query to fetch data
    connection.query("SELECT hour,price FROM test", (queryErr, rows) => {
      // Release the connection back to the pool

      if (queryErr) {
        console.error("Error querying database:", queryErr);
        res.status(500).send("Internal Server Error");
        return;
      }
      // console.log(rows);

      connection.query("SELECT count(*) as count FROM test", (queryErr, rows1) => {
        // Release the connection back to the pool
        connection.release();

        if (queryErr) {
          console.error("Error querying database:", queryErr);
          res.status(500).send("Internal Server Error");
          return;
        }
        // console.log(rows1);
        console.log({ rows: rows, ...rows1 });
        res.json({ rows: rows, ...rows1 });
      });
      // Send the fetched data as a response
    });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
