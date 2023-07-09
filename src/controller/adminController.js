const adminModel = require("../model/adminModels");
// Import Helper for Template Response
const commonHelper = require("../helper/common");
// Import random id
const { v4: uuidv4 } = require("uuid");
const Pool = require("../config/db");

const getAllAdmin = async (req, res) => {
  // Set params as const
  const queryLimit = req.query.limit;
  try {
    const selectResult = await adminModel.selectAllAdmin(queryLimit);
    if (selectResult.rowCount > 0) {
      return commonHelper.response(
        res,
        selectResult.rows,
        200,
        "Get all Admin success"
      );
    } else {
      return commonHelper.response(res, null, 404, "No Admin available");
    }
  } catch (error) {
    console.log(error);
    return commonHelper.response(res, null, 500, "Failed to get all Admin");
  }
};

const getDetailAdmin = async (req, res) => {
  // Set param id as const
  const queryId = req.params.id;
  try {
    const selectResult = await adminModel.selectDetailAdmin(queryId);
    // Check the affected row
    if (selectResult.rowCount > 0) {
      return commonHelper.response(
        res,
        selectResult.rows,
        200,
        "Get detail admin success"
      );
    } else {
      return commonHelper.response(
        res,
        selectResult.rows,
        404,
        "admin not found"
      );
    }
  } catch (error) {
    console.log(error);
    return commonHelper.response(res, null, 500, "Failed to get detail admin");
  }
};

const addAdmin = async (req, res) => {
  // Generate Id
  req.body.id_admins = uuidv4();
  try {
    const insertResult = await adminModel.insertAdmin(req.body);
    return commonHelper.response(res, insertResult.rows, 200, "admin added");
  } catch (error) {
    console.log(error);
    if (error.detail && error.detail.includes("already exists.")) {
      return commonHelper.response(res, null, 400, "admin name already exist");
    } else {
      return commonHelper.response(res, null, 500, "Failed to add admin");
    }
  }
};

const editAdmin = async (req, res) => {
  // Set param id as const
  const queryId = req.params.id;
  req.body.queryId = queryId;
  // Update other field
  try {
    const updateResult = await adminModel.updateAdmin(req.body);
    if (updateResult.rowCount > 0) {
      return commonHelper.response(res, updateResult.rows, 200, "admin edited");
    } else {
      return commonHelper.response(res, null, 404, "admin not found");
    }
  } catch (error) {
    console.log(error);
    if (error.detail && error.detail.includes("already exists.")) {
      return commonHelper.response(res, null, 400, "admin name already exist");
    } else {
      return commonHelper.response(res, null, 500, "Failed to update admin");
    }
  }
};

const deleteAdmin = async (req, res) => {
  // Set param id as const
  const queryId = req.params.id;
  try {
    const deleteResult = await adminModel.deleteAdmin(queryId);
    if (deleteResult.rowCount > 0) {
      return commonHelper.response(
        res,
        deleteResult.rows,
        200,
        "admin deleted"
      );
    } else {
      return commonHelper.response(res, null, 404, "admin not found");
    }
  } catch (error) {
    console.log(error);
    return commonHelper.response(res, null, 500, "Failed to delete admin");
  }
};

module.exports = {
  getAllAdmin,
  getDetailAdmin,
  addAdmin,
  editAdmin,
  deleteAdmin,
};
