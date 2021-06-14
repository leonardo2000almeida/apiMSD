const dotenv = require("dotenv").config();
const sql = require("mssql");

const poolPromise = new sql.ConnectionPool({
  user: 'rdaccess',
  password: 'HackaFiapMSD',
  server: '187.109.40.139',
  port: 1433,
  options: {
    trustedConnection: true,
    instanceName: process.env.DB_SERVER
  }
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
