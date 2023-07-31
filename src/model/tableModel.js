const Pool = require("../config/db");

const selectAllTable = () => {
  return Pool.query(`SELECT * FROM tables ORDER BY table_name ASC`);
};

const selectDetailTable = (queryId) => {
  return Pool.query("SELECT * FROM tables WHERE id_tables = $1", [queryId]);
};

const selectDetailName = (queryId) => {
  return Pool.query(`SELECT * FROM tables WHERE table_name='${queryId}'`);
};

const insertTable = (queryObject) => {
  const { id_tables, name, no_telp, table_name, time_start } = queryObject;
  return Pool.query(
    `INSERT INTO tables(id_tables, name, no_telp, table_name, time_start)` +
      `VALUES('${id_tables}', '${name}', '${no_telp}', '${table_name}', '${time_start}')`
  );
};

const updateTable = (queryObject) => {
  const {
    id_tables,
    name,
    no_telp,
    table_name,
    time_start,
    time_end,
    time_logout,
  } = queryObject;
  return Pool.query(
    `UPDATE tables SET name='${name}', no_telp='${no_telp}', table_name='${table_name}', time_start='${time_start}', time_end='${time_end}', time_logout='${time_logout}'` +
      `WHERE id_tables='${id_tables}'`
  );
};

// const updateTableEnd = (queryObject) => {
//   const { id_tables, time_end } = queryObject;
//   return Pool.query(
//     `UPDATE tables SET time_end='${time_end}'` +
//       `WHERE id_tables='${id_tables}'`
//   );
// };

const deleteTable = (queryId) => {
  return Pool.query(`DELETE FROM tables WHERE id_tables='${queryId}'`);
};

const deleteTableByName = (queryId) => {
  return Pool.query(`DELETE FROM tables WHERE table_name='${queryId}'`);
};

module.exports = {
  selectAllTable,
  selectDetailTable,
  selectDetailName,
  // updateTableEnd,
  insertTable,
  updateTable,
  deleteTable,
  deleteTableByName,
};
