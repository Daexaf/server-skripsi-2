// Import model
const reviewModel = require("../model/reviewModel");
// Import Helper for Template Response
const commonHelper = require("../helper/common");
// Import random id
const { v4: uuidv4 } = require("uuid");

const getAllReview = async (req, res) => {
  // Set params as const
  const queryLimit = req.query.limit;
  try {
    const selectResult = await reviewModel.selectAllReview(queryLimit);
    if (selectResult.rowCount > 0) {
      return commonHelper.response(
        res,
        selectResult.rows,
        200,
        "Get all Review success"
      );
    } else {
      return commonHelper.response(res, null, 404, "No review available");
    }
  } catch (error) {
    console.log(error);
    return commonHelper.response(res, null, 500, "Failed to getAllReview");
  }
};

const getDetailReview = async (req, res) => {
  // Set param id as const
  const queryId = req.params.id;
  try {
    const selectResult = await reviewModel.selectDetailReview(queryId);
    // Check the affected row
    if (selectResult.rowCount > 0) {
      return commonHelper.response(
        res,
        selectResult.rows,
        200,
        "Get detail Review success"
      );
    } else {
      return commonHelper.response(
        res,
        selectResult.rows,
        404,
        "Review not found"
      );
    }
  } catch (error) {
    console.log(error);
    return commonHelper.response(res, null, 500, "Failed to get detail Review");
  }
};

const addReview = async (req, res) => {
  // Generate Id
  req.body.id_review = uuidv4();
  try {
    const insertResult = await reviewModel.insertReview(req.body);
    return commonHelper.response(res, insertResult.rows, 200, "Review added");
  } catch (error) {
    console.log(error);
    if (error.detail && error.detail.includes("already exists.")) {
      return commonHelper.response(res, null, 400, "Review name already exist");
    } else {
      return commonHelper.response(res, null, 500, "Failed to add Review");
    }
  }
};

const editReview = async (req, res) => {
  // Set param id as const
  const queryId = req.params.id;
  req.body.queryId = queryId;
  // Update other field
  try {
    const updateResult = await reviewModel.updateReview(req.body);
    if (updateResult.rowCount > 0) {
      return commonHelper.response(
        res,
        updateResult.rows,
        200,
        "Review edited"
      );
    } else {
      return commonHelper.response(res, null, 404, "Review not found");
    }
  } catch (error) {
    console.log(error);
    if (error.detail && error.detail.includes("already exists.")) {
      return commonHelper.response(res, null, 400, "Review name already exist");
    } else {
      return commonHelper.response(res, null, 500, "Failed to update Review");
    }
  }
};

const deleteReview = async (req, res) => {
  // Set param id as const
  const id_review = req.params.id;
  try {
    const deleteResult = await reviewModel.deleteReview(id_review);
    if (deleteResult.rowCount > 0) {
      return commonHelper.response(
        res,
        deleteResult.rows,
        200,
        "Review deleted"
      );
    } else {
      return commonHelper.response(res, null, 404, "delete Review not found");
    }
  } catch (error) {
    console.log(error);
    return commonHelper.response(res, null, 500, "Failed to delete Review");
  }
};

module.exports = {
  getAllReview,
  getDetailReview,
  addReview,
  editReview,
  deleteReview,
};
