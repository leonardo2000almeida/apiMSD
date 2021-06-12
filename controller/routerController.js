const sql = require("mssql");
const queries = require("./queries.json");
const dotenv = require("dotenv").config();
const keys = Object.keys(queries);
const values = Object.values(queries);

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
  keys.map(async (key, index) => {
    if (key == route) {
      try {
        await sql.connect(sqlConfig);
        const result = await sql.query(values[index]);
      } catch (err) {
        console.log(err);
        return err;
      }
    }
  });
};

module.exports=query;