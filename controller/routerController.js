const queries = require("./queries.json");
const mysql = require("mysql");
const keys = Object.keys(queries);
const values = Object.values(queries);

const connection = mysql.createPool({
  host: "187.109.40.139",
  port: 1433,
  user: "rdaccess",
  password: "HackaFiapMSD",
  database: "DB_Hackaton",
});


const query = async (route) => {
  keys.map((key, index) => {
    if (key == route) {
      try {
        connection.query(values[index], (err, result, fields) => {
          console.log(fields);
          console.log(`Result: ${result}`);
          return result;
        });
      } catch (err) {
        return err;
      }
    }
  });
};


module.exports = query;
