// Import model
const keranjangModel = require("../model/keranjangModel");
// Import Helper for Template Response
const commonHelper = require("../helper/common");

const getAllKeranjang = async (req, res) => {
  // Set params as const
  const queryLimit = req.query.limit;
  try {
    const selectResult = await keranjangModel.selectAllKeranjang(queryLimit);
    if (selectResult.rowCount > 0) {
      return commonHelper.response(
        res,
        selectResult.rows,
        200,
        "Get all keranjang success"
      );
    } else {
      return commonHelper.response(res, null, 404, "No keranjang available");
    }
  } catch (error) {
    console.log(error);
    return commonHelper.response(res, null, 500, "Failed to getAllkeranjang");
  }
};

const getDetailkeranjang = async (req, res) => {
  // Set param id as const
  const queryId = req.params.id;
  try {
    const selectResult = await keranjangModel.selectDetailKeranjang(queryId);
    // Check the affected row
    if (selectResult.rowCount > 0) {
      return commonHelper.response(
        res,
        selectResult.rows,
        200,
        "Get detail keranjang success"
      );
    } else {
      return commonHelper.response(
        res,
        selectResult.rows,
        404,
        "keranjang not found"
      );
    }
  } catch (error) {
    console.log(error);
    return commonHelper.response(
      res,
      null,
      500,
      "Failed to get keranjang Category"
    );
  }
};

const addKeranjang = async (req, res) => {
  // Generate Id
  // req.body.queryId = uuidv4();
  try {
    const insertResult = await keranjangModel.insertKeranjang(req.body);
    return commonHelper.response(
      res,
      insertResult.rows,
      200,
      "Keranjang added"
    );
  } catch (error) {
    console.log(error);
    if (error.detail && error.detail.includes("already exists.")) {
      return commonHelper.response(res, null, 400, "Keranjang already exist");
    } else if (error.detail && error.detail.includes('is not present in table "tables".')) {
      return commonHelper.response(res, null, 400, "Table id is not present in table tables")
    }
    return commonHelper.response(res, null, 500, "Failed to add keranjang");
  }
};

const editKeranjang = async (req, res) => {
  // Set param id as const
  const queryId = req.params.id;
  req.body.queryId = queryId;
  // Update other field
  try {
    const updateResult = await keranjangModel.updateKeranjang(req.body);
    if (updateResult.rowCount > 0) {
      return commonHelper.response(
        res,
        updateResult.rows,
        200,
        "keranjang edited"
      );
    } else {
      return commonHelper.response(res, null, 404, "keranjang not found");
    }
  } catch (error) {
    console.log(error);
    if (error.detail && error.detail.includes("already exists.")) {
      return commonHelper.response(res, null, 400, "Keranjang already exist");
    } else if (error.detail && error.detail.includes('is not present in table "tables".')) {
      return commonHelper.response(res, null, 400, "Table id is not present in table tables")
    }
    return commonHelper.response(res, null, 500, "Failed to edit keranjang");
  }
};

const deleteKeranjang = async (req, res) => {
  // Set param id as const
  const queryId = req.params.id;
  try {
    const deleteResult = await keranjangModel.deleteKeranjang(queryId);
    if (deleteResult.rowCount > 0) {
      return commonHelper.response(
        res,
        deleteResult.rows,
        200,
        "keranjang deleted"
      );
    } else {
      return commonHelper.response(res, null, 404, "keranjang not found");
    }
  } catch (error) {
    console.log(error);
    return commonHelper.response(res, null, 500, "Failed to delete keranjang");
  }
};

module.exports = {
  getAllKeranjang,
  getDetailkeranjang,
  addKeranjang,
  editKeranjang,
  deleteKeranjang,
};
