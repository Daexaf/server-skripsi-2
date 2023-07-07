const Pool = require("../config/db");

const selectAllProduct = () => {
  return Pool.query(`SELECT * FROM products ORDER BY kode ASC`);
};

const selectProductByCategory = (queryId) => {
  return Pool.query(
    `SELECT * FROM products WHERE id_category='${queryId}' ORDER BY name ASC`
  );
};

const selectDetailProduct = (queryId) => {
  return Pool.query(`SELECT * FROM products WHERE id_products='${queryId}'`);
};

const insertProduct = (queryObject) => {
  const { id_products, kode, name, harga, is_ready, gambar, id_category } =
    queryObject;
  return Pool.query(
    `INSERT INTO products(id_products, kode, name, harga, is_ready, gambar, id_category)` +
      `VALUES('${id_products}', '${kode}','${name}', ${harga}, '${is_ready}', '${gambar}', '${id_category}')`
  );
};

const updateProduct = (queryObject) => {
  const { id_products, kode, name, harga, is_ready, gambar, id_category } =
    queryObject;
  return Pool.query(
    `UPDATE products SET kode='${kode}', name='${name}', harga=${harga}, is_ready='${is_ready}', gambar='${gambar}', id_category='${id_category}'` +
      `WHERE id_products='${id_products}'`
  );
};

const deleteProduct = (queryId) => {
  return Pool.query(`DELETE FROM products WHERE id_products='${queryId}'`);
};

module.exports = {
  selectAllProduct,
  selectDetailProduct,
  selectProductByCategory,
  insertProduct,
  updateProduct,
  deleteProduct,
};
