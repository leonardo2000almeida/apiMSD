const dotenv = require("dotenv").config();

// create a config to mssql
module.exports = sqlConfig = {
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
