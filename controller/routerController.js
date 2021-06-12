const sql = require("mssql");
const queries = require("./queries.json");
const sqlConfig = require("./dbConfig");

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