const queries = require("./queries.json");
const { poolPromise } = require("./dbConfig");

// get info from request, and send a result query
const query = async (route) => {
  if (queries[route]) {
    try {
      const pool = await poolPromise;
      const result = await pool.request().query(queries[route]);
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
};

module.exports = query;
