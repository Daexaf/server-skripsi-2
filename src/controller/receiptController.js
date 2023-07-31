// Import model
const receiptModels = require("../model/receiptModels");
// Import Helper for Template Response
const commonHelper = require("../helper/common");
// Import random id
const { v4: uuidv4 } = require("uuid");

const getAllReceipt = async (req, res) => {
  // Set params as const
  try {
    const selectResult = await receiptModels.selectAllReceipt();
    if (selectResult.rowCount > 0) {
      return commonHelper.response(
        res,
        selectResult.rows,
        200,
        "Get all receipt success"
      );
    } else {
      return commonHelper.response(res, null, 404, "No receipt available");
    }
  } catch (error) {
    console.log(error);
    return commonHelper.response(res, null, 500, "Failed to table");
  }
};

const getDetailReceipt = async (req, res) => {
  // Set param id as const
  const queryId = req.params.id;
  try {
    const selectResult = await receiptModels.selectDetailReceipt(queryId);
    // Check the affected row
    if (selectResult.rowCount > 0) {
      return commonHelper.response(
        res,
        selectResult.rows,
        200,
        "Get detail receipt success"
      );
    } else {
      return commonHelper.response(
        res,
        selectResult.rows,
        404,
        "receipt not found"
      );
    }
  } catch (error) {
    console.log(error);
    return commonHelper.response(
      res,
      null,
      500,
      "Failed to get detail receipt"
    );
  }
};

const addReceipt = async (req, res) => {
  // Generate Id
  req.body.id_receipts = uuidv4();
  try {
    const insertResult = await receiptModels.insertReceipt(req.body);
    return commonHelper.response(res, [req.body], 200, "receipt added");
  } catch (error) {
    console.log(error);
    if (error.detail && error.detail.includes("already exists.")) {
      return commonHelper.response(res, null, 400, "receipt already exist");
    } else {
      return commonHelper.response(res, null, 500, "Failed to add receipt");
    }
  }
};

const editReceipt = async (req, res) => {
  // Set param id as const
  const queryId = req.params.id;
  req.body.queryId = queryId;
  // Update other field
  try {
    const updateResult = await receiptModels.updateReceipt(req.body);
    if (updateResult.rowCount > 0) {
      return commonHelper.response(
        res,
        updateResult.rows,
        200,
        "receipt edited"
      );
    } else {
      return commonHelper.response(res, null, 404, "receipt not found");
    }
  } catch (error) {
    console.log(error);
    if (error.detail && error.detail.includes("already exists.")) {
      return commonHelper.response(res, null, 400, "receipt already exist");
    } else {
      return commonHelper.response(res, null, 500, "failed to update receipt");
    }
  }
};

const deleteReceipt = async (req, res) => {
  // Set param id as const
  const queryId = req.params.id;
  try {
    const deleteResult = await receiptModels.deleteReceipt(queryId);
    if (deleteResult.rowCount > 0) {
      return commonHelper.response(
        res,
        deleteResult.rows,
        200,
        "receipt deleted"
      );
    } else {
      return commonHelper.response(res, null, 404, "receipt not found");
    }
  } catch (error) {
    console.log(error);
    return commonHelper.response(res, null, 500, "Failed to delete receipt");
  }
};

const deleteReceiptByName = async (req, res) => {
  // Set param name as const
  const queryName = req.params.name;
  try {
    const deleteResult = await receiptModels.deleteReceiptByName(queryName);
    if (deleteResult.rowCount > 0) {
      return commonHelper.response(
        res,
        deleteResult.rows,
        200,
        "receipt deleted"
      );
    } else {
      return commonHelper.response(res, null, 404, "receipt not found");
    }
  } catch (error) {
    console.log(error);
    return commonHelper.response(res, null, 500, "Failed to delete receipt");
  }
};

module.exports = {
  getAllReceipt,
  getDetailReceipt,
  addReceipt,
  editReceipt,
  deleteReceipt,
  deleteReceiptByName,
};
