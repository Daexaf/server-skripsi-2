const Pool = require("../config/db");

const selectAllKeranjang = (queryLimit) => {
  if (!queryLimit) {
    queryLimit = 10;
  }
  return Pool.query(
    `SELECT * FROM keranjangs ORDER BY id_keranjangs ASC LIMIT '${queryLimit}'`
  );
};

const selectDetailKeranjang = (queryId) => {
  return Pool.query(
    `SELECT * FROM keranjangs WHERE id_keranjangs='${queryId}'`
  );
};

module.exports = {
  selectAllKeranjang,
  selectDetailKeranjang,
};
