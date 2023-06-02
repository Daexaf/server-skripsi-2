const Pool = require("../config/db");
const selectAllCategory = (queryLimit) => {
  if (!queryLimit) {
    queryLimit = 10;
  }
  return Pool.query(
    `SELECT * FROM category ORDER BY name ASC LIMIT '${queryLimit}'`
  );
};
module.exports = {
  selectAllCategory,
};
