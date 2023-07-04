const Pool = require("../config/db");

const selectAllKeranjang = () => {
  return Pool.query(`SELECT * FROM keranjangs ORDER BY id_keranjangs ASC`);
};

const selectKeranjangByIdProduct = (queryId) => {
  return Pool.query(`SELECT * FROM keranjangs WHERE product='${queryId}'`);
};

const selectKeranjangByIdTable = (queryId) => {
  // return Pool.query(`SELECT * FROM keranjangs WHERE id_tables='${queryId}'`);
  return Pool.query(`SELECT keranjangs.*, json_agg(products.*) AS product FROM keranjangs INNER JOIN products on keranjangs.product = products.id_products WHERE keranjangs.id_tables='${queryId}' GROUP BY keranjangs.id_keranjangs`);
};

const selectDetailKeranjang = (queryId) => {
  return Pool.query(
    `SELECT * FROM keranjangs WHERE id_keranjangs='${queryId}'`
  );
};

const insertKeranjang = (queryObject) => {
  const { id_keranjangs, jumlah, total_harga, product, id_tables, keterangan } =
    queryObject;
  return Pool.query(
    `INSERT INTO keranjangs(id_keranjangs, jumlah, total_harga, product,  id_tables, keterangan)` +
      `VALUES('${id_keranjangs}', '${jumlah}','${total_harga}', '${product}', '${id_tables}', '${keterangan}')`
  );
};

const updateKeranjang = (queryObject) => {
  const { id_keranjangs, jumlah, total_harga, product, keterangan } = queryObject;
  return Pool.query(
    `UPDATE keranjangs SET jumlah='${jumlah}', total_harga='${total_harga}', product='${product}', keterangan='${keterangan}'` +
      `WHERE id_keranjangs='${id_keranjangs}'`
  );
};

const deleteKeranjang = (id_keranjangs) => {
  return Pool.query(
    `DELETE FROM keranjangs WHERE id_keranjangs='${id_keranjangs}'`
  );
};

const deleteKeranjangByIdTable = (id_tables) => {
  return Pool.query(`DELETE FROM keranjangs WHERE id_tables='${id_tables}'`);
};

module.exports = {
  selectAllKeranjang,
  selectDetailKeranjang,
  selectKeranjangByIdProduct,
  selectKeranjangByIdTable,
  insertKeranjang,
  updateKeranjang,
  deleteKeranjang,
  deleteKeranjangByIdTable,
};
