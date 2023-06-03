const Pool = require("../config/db");

const selectAllProduct = (queryLimit) => {
  if (!queryLimit) {
    queryLimit = 10;
  }
  return Pool.query(
    `SELECT * FROM products ORDER BY id_products ASC LIMIT '${queryLimit}'`
  );
};

const selectDetailProduct = (queryId) => {
  return Pool.query(`SELECT * FROM products WHERE id_products='${queryId}'`);
};

const insertProduct = (queryObject) => {
  const { id_products, kode, nama, harga, is_ready, gambar, id_category } =
    queryObject;
  return Pool.query(
    `INSERT INTO products(id_products, kode, nama, harga, is_ready, gambar, id_category)` +
      `VALUES(${id_products}, '${kode}','${nama}', ${harga}, '${is_ready}', '${gambar}', ${id_category})`
  );
};

const updateProduct = (queryObject) => {
  const { id_products, kode, nama, harga, is_ready, gambar, id_category } =
    queryObject;
  return Pool.query(
    `UPDATE products SET kode='${kode}', nama='${nama}', harga=${harga}, is_ready=${is_ready}, gambar='${gambar}', id_category=${id_category}` +
      `WHERE id_products=${id_products}`
  );
};

const deleteProduct = (queryId) => {
  return Pool.query(`DELETE FROM products WHERE id_products='${queryId}'`);
};

module.exports = {
  selectAllProduct,
  selectDetailProduct,
  insertProduct,
  updateProduct,
  deleteProduct,
};
