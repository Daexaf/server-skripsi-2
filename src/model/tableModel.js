const Pool = require("../config/db");

const selectAllTable = (queryLimit) => {
  if (!queryLimit) {
    queryLimit = 10;
  }
  return Pool.query(
    `SELECT * FROM tables ORDER BY id_tables ASC LIMIT '${queryLimit}'`
  );
};

const selectDetailTable = (queryId) => {
  return Pool.query(`SELECT * FROM tables WHERE id_tables='${queryId}'`);
};

const insertTable = (queryObject) => {
  const { id_tables, name, no_telp } = queryObject;
  return Pool.query(
    `INSERT INTO tables(id_tables, name, no_telp)` +
      `VALUES('${id_tables}', '${name}', '${no_telp}')`
  );
};

const updateTable = (queryObject) => {
  const { id_tables, name, no_telp } = queryObject;
  return Pool.query(
    `UPDATE tables SET name='${name}', no_telp='${no_telp}'` +
      `WHERE id_tables='${id_tables}'`
  );
};

const deleteTable = (queryId) => {
  return Pool.query(`DELETE FROM tables WHERE id_tables='${queryId}'`);
};

module.exports = {
  selectAllTable,
  selectDetailTable,
  insertTable,
  updateTable,
  deleteTable,
};
