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

const insertKeranjang = (queryObject) => {
  const { id_keranjangs, jumlah, total_harga, product, id_tables } =
    queryObject;
  return Pool.query(
    `INSERT INTO keranjangs(id_keranjangs, jumlah, total_harga, product,  id_tables)` +
      `VALUES('${id_keranjangs}', '${jumlah}','${total_harga}', '${product}', '${id_tables}')`
  );
};

const updateKeranjang = (queryObject) => {
  const { id_keranjangs, jumlah, total_harga, product } = queryObject;
  return Pool.query(
    `UPDATE keranjangs SET jumlah='${jumlah}', total_harga='${total_harga}', product='${product}'` +
      `WHERE id_keranjangs='${id_keranjangs}'`
  );
};

const deleteKeranjang = (id_keranjangs) => {
  return Pool.query(
    `DELETE FROM keranjangs WHERE id_keranjangs='${id_keranjangs}'`
  );
};

module.exports = {
  selectAllKeranjang,
  selectDetailKeranjang,
  insertKeranjang,
  updateKeranjang,
  deleteKeranjang,
};
