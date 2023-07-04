const Pool = require("../config/db");
const { v4: uuidv4 } = require("uuid");

const selectAllCategory = (queryLimit) => {
  if (!queryLimit) {
    queryLimit = 10;
  }
  return Pool.query(
    `SELECT * FROM categories ORDER BY id_categories ASC LIMIT '${queryLimit}'`
  );
};

const selectDetailCategory = (queryId) => {
  return Pool.query(
    `SELECT * FROM categories WHERE id_categories='${queryId}'`
  );
};

const selectCategoryByName = (queryName) => {
  return Pool.query(`SELECT * FROM categories WHERE name='${queryName}'`);
};

const insertCategory = (queryObject) => {
  const { id_categories, name } = queryObject;
  return Pool.query(
    `INSERT INTO categories(id_categories, name)` +
      `VALUES('${id_categories}', '${name}')`
  );
};

const updateCategory = (queryObject) => {
  const { id_categories, name } = queryObject;
  return Pool.query(
    `UPDATE categories SET name='${name}'` +
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
  selectCategoryByName,
  insertCategory,
  updateCategory,
  deleteCategory,
};
