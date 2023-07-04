const Pool = require("../config/db");
const { v4: uuidv4 } = require("uuid");

const selectAllAdmin = (queryLimit) => {
  if (!queryLimit) {
    queryLimit = 10;
  }
  return Pool.query(
    `SELECT * FROM admin ORDER BY id_admins ASC LIMIT '${queryLimit}'`
  );
};

const selectDetailAdmin = (queryId) => {
  return Pool.query(`SELECT * FROM admin WHERE id_admins='${queryId}'`);
};

const insertAdmin = (queryObject) => {
  const { id_admins, username, password, email } = queryObject;
  return Pool.query(
    `INSERT INTO admin(id_admins, username, password, email)` +
      `VALUES('${id_admins}', '${username}', '${password}', '${email}')`
  );
};

const updateAdmin = (queryObject) => {
  const { id_admins, username, password, email } = queryObject;
  return Pool.query(
    `UPDATE admin SET username='${username}', password='${password}', email='${email}'` +
      `WHERE id_admins='${id_admins}'`
  );
};

const deleteAdmin = (queryId) => {
  return Pool.query(`DELETE FROM admin WHERE id_admins='${queryId}'`);
};

module.exports = {
  selectAllAdmin,
  selectDetailAdmin,
  insertAdmin,
  updateAdmin,
  deleteAdmin,
};
