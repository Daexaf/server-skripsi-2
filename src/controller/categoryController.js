// Import model
const categoryModel = require("../model/categoryModel");
// Import Helper for Template Response
const commonHelper = require("../helper/common");

const getAllCategory = async (req, res) => {
  // Set params as const
  const queryLimit = req.query.limit;
  try {
    const selectResult = await skillModel.selectAllCagetAllCategory(queryLimit);
    if (selectResult.rowCount > 0) {
      return commonHelper.response(
        res,
        selectResult.rows,
        200,
        "Get all CagetAllCategory success"
      );
    } else {
      return commonHelper.response(res, null, 404, "No skill available");
    }
  } catch (error) {
    console.log(error);
    return commonHelper.response(
      res,
      null,
      500,
      "Failed to get all CagetAllCategory"
    );
  }
};

module.exports = {
  getAllCategory,
};
