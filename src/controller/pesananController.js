const pesananModel = require("../model/pesananModel");
// Import Helper for Template Response
const commonHelper = require("../helper/common");

const getAllPesanan = async (req, res) => {
  // Set params as const
  const queryLimit = req.query.limit;
  try {
    const selectResult = await pesananModel.selectAllPesanan(queryLimit);
    if (selectResult.rowCount > 0) {
      return commonHelper.response(
        res,
        selectResult.rows,
        200,
        "Get all pesanan success"
      );
    } else {
      return commonHelper.response(res, null, 404, "No pesanan available");
    }
  } catch (error) {
    console.log(error);
    return commonHelper.response(res, null, 500, "Failed to show pesanan");
  }
};

module.exports = {
  getAllPesanan,
};
