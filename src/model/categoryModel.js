const Pool = require("../config/db");
const selectAllCategory = (queryLimit) => {
  if (!queryLimit) {
    queryLimit = 10;
  }
  return Pool.query(
    `SELECT * FROM categories ORDER BY nama ASC LIMIT '${queryLimit}'`
  );
};

const selectDetailCategory = (queryId) => {
  return Pool.query(
    `SELECT * FROM categories WHERE id_categories='${queryId}'`
  );
};

const insertCategory = (queryObject) => {
  const { id_categories, nama } = queryObject;
  return Pool.query(
    `INSERT INTO categories(id_categories, nama)` +
      `VALUES('${id_categories}', '${nama}')`
  );
};

const updateCategory = (queryObject) => {
  const { id_categories, nama } = queryObject;
  return Pool.query(
    `UPDATE categories SET nama='${nama}'` +
      `WHERE id_categories='${id_categories}'`
  );
};

const deleteCategory = (id_categories) => {
  return Pool.query(
    `DELETE FROM categories WHERE id_categories='${id_categories}'`
  );
};

module.exports = {
  selectAllCategory,
  selectDetailCategory,
  insertCategory,
  updateCategory,
  deleteCategory,
};
