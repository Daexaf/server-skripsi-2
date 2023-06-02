// Import model
const categoryModel = require("../model/categoryModel");
// Import Helper for Template Response
const commonHelper = require("../helper/common");

const getAllCategory = async (req, res) => {
  // Set params as const
  const queryLimit = req.query.limit;
  try {
    const selectResult = await categoryModel.selectAllCategory(queryLimit);
    if (selectResult.rowCount > 0) {
      return commonHelper.response(
        res,
        selectResult.rows,
        200,
        "Get all Category success"
      );
    } else {
      return commonHelper.response(res, null, 404, "No Categories available");
    }
  } catch (error) {
    console.log(error);
    return commonHelper.response(res, null, 500, "Failed to getAllCategory");
  }
};

const getDetailCategory = async (req, res) => {
  // Set param id as const
  const queryId = req.params.id;
  try {
    const selectResult = await categoryModel.selectDetailCategory(queryId);
    // Check the affected row
    if (selectResult.rowCount > 0) {
      return commonHelper.response(
        res,
        selectResult.rows,
        200,
        "Get detail Category success"
      );
    } else {
      return commonHelper.response(
        res,
        selectResult.rows,
        404,
        "Category not found"
      );
    }
  } catch (error) {
    console.log(error);
    return commonHelper.response(
      res,
      null,
      500,
      "Failed to get detail Category"
    );
  }
};

const addCategory = async (req, res) => {
  // Generate Id
  // req.body.queryId = uuidv4();
  try {
    const insertResult = await categoryModel.insertCategory(req.body);
    return commonHelper.response(res, insertResult.rows, 200, "Category added");
  } catch (error) {
    console.log(error);
    if (error.detail && error.detail.includes("already exists.")) {
      return commonHelper.response(
        res,
        null,
        400,
        "Category name already exist"
      );
    } else {
      return commonHelper.response(res, null, 500, "Failed to add Category");
    }
  }
};

const editCategory = async (req, res) => {
  // Set param id as const
  const queryId = req.params.id;
  req.body.queryId = queryId;
  // Update other field
  try {
    const updateResult = await categoryModel.updateCategory(req.body);
    if (updateResult.rowCount > 0) {
      return commonHelper.response(
        res,
        updateResult.rows,
        200,
        "category edited"
      );
    } else {
      return commonHelper.response(res, null, 404, "category not found");
    }
  } catch (error) {
    console.log(error);
    if (error.detail && error.detail.includes("already exists.")) {
      return commonHelper.response(
        res,
        null,
        400,
        "category name already exist"
      );
    } else {
      return commonHelper.response(res, null, 500, "Failed to update category");
    }
  }
};

const deleteCategory = async (req, res) => {
  // Set param id as const
  const id_categories = req.params.id;
  try {
    const deleteResult = await categoryModel.deleteCategory(id_categories);
    if (deleteResult.rowCount > 0) {
      return commonHelper.response(
        res,
        deleteResult.rows,
        200,
        "deleteCategory deleted"
      );
    } else {
      return commonHelper.response(res, null, 404, "deleteCategory not found");
    }
  } catch (error) {
    console.log(error);
    return commonHelper.response(res, null, 500, "Failed to deleteCategory");
  }
};

module.exports = {
  getAllCategory,
  getDetailCategory,
  addCategory,
  editCategory,
  deleteCategory,
};
