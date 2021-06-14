const dotenv = require("dotenv").config();
const dbConfig = {
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
};

// create a config to mssql
module.exports = {
  dbConfig,
};
