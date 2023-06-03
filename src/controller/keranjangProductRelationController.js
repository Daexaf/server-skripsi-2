// Import model
const keranjangProductRelationModel = require("../model/keranjangProductRelationModel");
// Import Helper for Template Response
const commonHelper = require("../helper/common");

const getAllKeranjangProductRelation = async (req, res) => {
  // Set params as const
  const queryLimit = req.query.limit;
  try {
    const selectResult = await keranjangProductRelationModel.selectAllKeranjangProductRelation(queryLimit);
    if (selectResult.rowCount > 0) {
      return commonHelper.response(
        res,
        selectResult.rows,
        200,
        "Get all relation success"
      );
    } else {
      return commonHelper.response(res, null, 404, "No relation available");
    }
  } catch (error) {
    console.log(error);
    return commonHelper.response(res, null, 500, "Failed to get all relation");
  }
};

const getDetailKeranjangProductRelation = async (req, res) => {
  // Set param id as const
  const queryId = req.params.id;
  try {
    const selectResult = await keranjangProductRelationModel.selectDetailKeranjangProductRelation(queryId);
    // Check the affected row
    if (selectResult.rowCount > 0) {
      return commonHelper.response(
        res,
        selectResult.rows,
        200,
        "Get detail relation success"
      );
    } else {
      return commonHelper.response(
        res,
        selectResult.rows,
        404,
        "Relation not found"
      );
    }
  } catch (error) {
    console.log(error);
    return commonHelper.response(
      res,
      null,
      500,
      "Failed to get relation Category"
    );
  }
};

const addKeranjangProductRelation = async (req, res) => {
  // Generate Id
  // req.body.queryId = uuidv4();
  try {
    const insertResult = await keranjangProductRelationModel.insertKeranjangProductRelation(req.body);
    return commonHelper.response(
      res,
      insertResult.rows,
      200,
      "Relation added"
    );
  } catch (error) {
    console.log(error);
    if (error.detail && error.detail.includes("already exists.")) {
      return commonHelper.response(res, null, 400, "Relation already exist");
    } else if (error.detail && error.detail.includes('is not present in table "products".')) {
      return commonHelper.response(res, null, 400, "Product id is not present in table products")
    } else if (error.detail && error.detail.includes('is not present in table "keranjangs".')) {
      return commonHelper.response(res, null, 400, "Keranjang id is not present in table keranjangs")
    }
    return commonHelper.response(res, null, 500, "Failed to add relation");
  }
};

const editKeranjangProductRelation = async (req, res) => {
  // Set param id as const
  const queryId = req.params.id;
  req.body.queryId = queryId;
  // Update other field
  try {
    const updateResult = await keranjangProductRelationModel.updateKeranjangProductRelation(req.body);
    if (updateResult.rowCount > 0) {
      return commonHelper.response(
        res,
        updateResult.rows,
        200,
        "Relation edited"
      );
    } else {
      return commonHelper.response(res, null, 404, "Relation not found");
    }
  } catch (error) {
    console.log(error);
    if (error.detail && error.detail.includes("already exists.")) {
      return commonHelper.response(res, null, 400, "Relation already exist");
    } else if (error.detail && error.detail.includes('is not present in table "products".')) {
      return commonHelper.response(res, null, 400, "Product id is not present in table products")
    } else if (error.detail && error.detail.includes('is not present in table "keranjangs".')) {
      return commonHelper.response(res, null, 400, "Keranjang id is not present in table keranjangs")
    }
    return commonHelper.response(res, null, 500, "Failed to edit relation");
  }
};

const deleteKeranjangProductRealtion = async (req, res) => {
  // Set param id as const
  const queryId = req.params.id;
  try {
    const deleteResult = await keranjangProductRelationModel.deleteKeranjangProductRealtion(queryId);
    if (deleteResult.rowCount > 0) {
      return commonHelper.response(
        res,
        deleteResult.rows,
        200,
        "Relation deleted"
      );
    } else {
      return commonHelper.response(res, null, 404, "Relation not found");
    }
  } catch (error) {
    console.log(error);
    return commonHelper.response(res, null, 500, "Failed to delete relation");
  }
};

module.exports = {
  getAllKeranjangProductRelation,
  getDetailKeranjangProductRelation,
  addKeranjangProductRelation,
  editKeranjangProductRelation,
  deleteKeranjangProductRealtion,
};
