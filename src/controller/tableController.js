// Import model
const tableModel = require("../model/tableModel");
// Import Helper for Template Response
const commonHelper = require("../helper/common");

const getAllTable = async (req, res) => {
  // Set params as const
  const queryLimit = req.query.limit;
  try {
    const selectResult = await tableModel.selectAllTable(queryLimit);
    if (selectResult.rowCount > 0) {
      return commonHelper.response(
        res,
        selectResult.rows,
        200,
        "Get all Table success"
      );
    } else {
      return commonHelper.response(res, null, 404, "No table available");
    }
  } catch (error) {
    console.log(error);
    return commonHelper.response(res, null, 500, "Failed to table");
  }
};

const getDetailTable = async (req, res) => {
  // Set param id as const
  const queryId = req.params.id;
  try {
    const selectResult = await tableModel.selectDetailTable(queryId);
    // Check the affected row
    if (selectResult.rowCount > 0) {
      return commonHelper.response(
        res,
        selectResult.rows,
        200,
        "Get detail table success"
      );
    } else {
      return commonHelper.response(
        res,
        selectResult.rows,
        404,
        "table not found"
      );
    }
  } catch (error) {
    console.log(error);
    return commonHelper.response(res, null, 500, "Failed to get detail table");
  }
};

const addTable = async (req, res) => {
  // Generate Id
  // req.body.queryId = uuidv4()
  try {
    const insertResult = await tableModel.insertTable(req.body);
    return commonHelper.response(res, insertResult.rows, 200, "table added");
  } catch (error) {
    console.log(error);
    if (error.detail && error.detail.includes("already exists.")) {
      return commonHelper.response(res, null, 400, "table already exist");
    } else {
      return commonHelper.response(res, null, 500, "Failed to add table");
    }
  }
};

const editTable = async (req, res) => {
  // Set param id as const
  const queryId = req.params.id;
  req.body.queryId = queryId;
  // Update other field
  try {
    const updateResult = await tableModel.updateTable(req.body);
    if (updateResult.rowCount > 0) {
      return commonHelper.response(res, updateResult.rows, 200, "Table edited");
    } else {
      return commonHelper.response(res, null, 404, "table not found");
    }
  } catch (error) {
    console.log(error);
    if (error.detail && error.detail.includes("already exists.")) {
      return commonHelper.response(res, null, 400, "table already exist");
    } else {
      return commonHelper.response(res, null, 500, "failed to update table");
    }
  }
};

const deleteTable = async (req, res) => {
  // Set param id as const
  const queryId = req.params.id;
  try {
    const deleteResult = await tableModel.deleteTable(queryId);
    if (deleteResult.rowCount > 0) {
      return commonHelper.response(
        res,
        deleteResult.rows,
        200,
        "table deleted"
      );
    } else {
      return commonHelper.response(res, null, 404, "table not found");
    }
  } catch (error) {
    console.log(error);
    return commonHelper.response(res, null, 500, "Failed to delete table");
  }
};

module.exports = {
  getAllTable,
  getDetailTable,
  addTable,
  editTable,
  deleteTable,
};
