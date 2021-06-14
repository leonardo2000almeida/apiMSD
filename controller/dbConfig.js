const dotenv = require("dotenv").config();
const sql = require("mssql");

const poolPromise = new sql.ConnectionPool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  server: process.env.DB_SERVER,
  requestTimeout: 10 * 60 * 1000, // 10 minutes
  options: {
    encrypt: false,
    trustedconnection: true,
    enableArithAort: true,
    instancename: process.env.DB_SERVER,
    trustServerCertificate: true,
    useUTC: false,
  },
  port: 1433,
})
  .connect()
  .then((pool) => {
    console.log("Connected to MSSQL");
    return pool;
  })
  .catch((err) => console.log("Database Connection Failed! Bad Config: ", err));

// create a config to mssql
module.exports = {
  poolPromise,
};
