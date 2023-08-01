const Pool = require("../config/db");

const selectAllReceipt = () => {
  return Pool.query(`SELECT * FROM receipt ORDER BY time_end DESC`);
};

const selectDetailReceipt = (queryId) => {
  return Pool.query(`SELECT * FROM receipt WHERE id_receipts='${queryId}'`);
};

const insertReceipt = (queryObject) => {
  const { id_receipts, name, no_telp, total_bayar, kode, time_end, status } =
    queryObject;

  const kodeStringify = JSON.stringify(kode);
  console.log(JSON.stringify(kode), "kode");
  return Pool.query(
    `INSERT INTO receipt(id_receipts, name, no_telp, total_bayar, kode, time_end, status)` +
      `VALUES('${id_receipts}', '${name}', '${no_telp}', '${total_bayar}', '${kodeStringify}','${time_end}', '${status}')`
  );
};

const updateReceipt = (queryObject) => {
  const { id_receipts, name, no_telp, total_bayar, kode, time_end, status } =
    queryObject;
  return Pool.query(
    `UPDATE receipt SET name='${name}', no_telp='${no_telp}', total_bayar='${total_bayar}', kode='${kode}' ,time_start='${time_end}', status='${status}'` +
      `WHERE id_receipts='${id_receipts}'`
  );
};

const deleteReceipt = (queryId) => {
  return Pool.query(`DELETE FROM receipt WHERE id_receipts='${queryId}'`);
};

const deleteReceiptByName = (queryId) => {
  return Pool.query(`DELETE FROM receipt WHERE name=$1'${queryId}'`);
};

module.exports = {
  selectAllReceipt,
  selectDetailReceipt,
  insertReceipt,
  updateReceipt,
  deleteReceipt,
  deleteReceiptByName,
};
