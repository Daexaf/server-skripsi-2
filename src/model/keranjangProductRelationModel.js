const Pool = require("../config/db");

const selectAllKeranjangProductRelation = (queryLimit) => {
  if (!queryLimit) {
    queryLimit = 10;
  }
  return Pool.query(
    `SELECT * FROM join_table_keranjangs_products ORDER BY id ASC LIMIT '${queryLimit}'`
  );
};

const selectDetailKeranjangProductRelation = (queryId) => {
  return Pool.query(
    `SELECT * FROM join_table_keranjangs_products WHERE id='${queryId}'`
  );
};

const insertKeranjangProductRelation = (queryObject) => {
  const { id, id_keranjangs, id_products } =
    queryObject;
  return Pool.query(
    `INSERT INTO join_table_keranjangs_products(id, id_keranjangs, id_products)` +
      `VALUES('${id}', '${id_keranjangs}','${id_products}')`
  );
};

const updateKeranjangProductRelation = (queryObject) => {
  const { id, id_keranjangs, id_products} = queryObject;
  return Pool.query(
    `UPDATE join_table_keranjangs_products SET id_keranjangs='${id_keranjangs}', id_products='${id_products}'` +
      `WHERE id='${id}'`
  );
};

const deleteKeranjangProductRealtion = (id) => {
  return Pool.query(
    `DELETE FROM join_table_keranjangs_products WHERE id='${id}'`
  );
};

module.exports = {
  selectAllKeranjangProductRelation,
  selectDetailKeranjangProductRelation,
  insertKeranjangProductRelation,
  updateKeranjangProductRelation,
  deleteKeranjangProductRealtion,
};
