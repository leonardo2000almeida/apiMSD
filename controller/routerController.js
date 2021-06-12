const sql = require("mssql");
const queries = require("./queries.json");
const dotenv = require("dotenv").config();

// create a config to mssql
const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  server: process.env.DB_SERVER,
  options: {
    trustedconnection: true,
    enableArithAort: true,
    instancename: process.env.DB_SERVER,
    trustServerCertificate: true,
  },
  port: 1433,
};

// get info from request, and send a result query
const query = async (route) => {
  if (queries[route]) {
    try {
      await sql.connect(sqlConfig);
      const result = sql.query(queries[route]);
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
};

module.exports = query;
