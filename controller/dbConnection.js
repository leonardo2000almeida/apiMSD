const mySql = require("mysql");

const pool = mySql.createPool({
  connectionLimit: 100,
  host: "187.109.40.139",
  port: 1433,
  user: "rdaccess",
  password: "HackaFiapMSD",
  database: "DB_Hackaton",
});

const getConnection = () => {
  pool.getConnection((err, conn) => {
    if (err) {
      console.log(err);
      return err;
    }
    console.log("connect");
   return conn
  });
};

module.exports = {
  getConnection
}