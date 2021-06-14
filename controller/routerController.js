const queries = require("./queries.json");
const sql = require("mssql");
const { dbConfig } = require("./dbConfig");

// get info from request, and send a result query
const query = async (route) => {
  if (queries[route]) {
    try {
      const pool = await sql.connect(dbConfig);
      const req = await pool.request().query(queries[route]);
      return req.recordsets;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
};

module.exports = query;
