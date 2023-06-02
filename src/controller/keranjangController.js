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

module.exports = {
  getAllKeranjang,
  getDetailkeranjang,
};
