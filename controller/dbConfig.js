const dotenv = require("dotenv").config();
const sql = require("mssql");


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
const poolPromise = new sql.ConnectionPool(sqlConfig)
  .connect()
  .then((pool) => {
    console.log("Connected to MSSQL");
    return pool;
  })
  .catch((err) => console.log("Database Connection Failed! Bad Config: ", err));

// create a config to mssql
module.exports = {
  sqlConfig,
  poolPromise,
};
