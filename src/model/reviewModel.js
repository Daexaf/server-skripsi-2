const Pool = require("../config/db");
const { v4: uuidv4 } = require("uuid");

const selectAllReview = (queryLimit) => {
  if (!queryLimit) {
    queryLimit = 10;
  }
  return Pool.query(
    `SELECT * FROM review ORDER BY id_review ASC LIMIT '${queryLimit}'`
  );
};

const selectDetailReview = (queryId) => {
  return Pool.query(`SELECT * FROM review WHERE id_review='${queryId}'`);
};

const selectReviewByName = (queryName) => {
  return Pool.query(`SELECT * FROM review WHERE name='${queryName}'`);
};

const insertReview = (queryObject) => {
  const { id_review, name, rating, comment } = queryObject;
  return Pool.query(
    `INSERT INTO review(id_review, name, rating, comment)` +
      `VALUES('${id_review}', '${name}', '${rating}', '${comment}')`
  );
};

const updateReview = (queryObject) => {
  const { id_review, name, rating, comment } = queryObject;
  return Pool.query(
    `UPDATE review SET name='${name}', rating='${rating}' ,comment='${comment}'` +
      `WHERE id_review='${id_review}'`
  );
};

const deleteReview = (id_review) => {
  return Pool.query(`DELETE FROM review WHERE id_review='${id_review}'`);
};

module.exports = {
  selectAllReview,
  selectDetailReview,
  selectReviewByName,
  insertReview,
  updateReview,
  deleteReview,
};
