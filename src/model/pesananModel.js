const Pool = require("../config/db");

const selectAllPesanan = (queryLimit) => {
  if (!queryLimit) {
    queryLimit = 10;
  }
  return Pool.query(
    `SELECT * FROM pesanans ORDER BY id_pesanans ASC LIMIT '${queryLimit}'`
  );
};

module.exports = {
  selectAllPesanan,
};
