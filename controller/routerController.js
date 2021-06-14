const queries = require("./queries.json");
const { poolPromise } = require("./dbConfig");

// get info from request, and send a result query
const query = async (route) => {
  if (queries[route]) {
    try {
      const pool = await poolPromise;
      const req = await pool.request().query(queries[route]);
      return req.recordsets
    } catch (err) {
      console.log(err);
      return err;
    }
  }
};

module.exports = query;
