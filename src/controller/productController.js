// Import model
const productModel = require("../model/productModel");
// Import Helper for Template Response
const commonHelper = require("../helper/common");

const getAllProduct = async (req, res) => {
  // Set params as const
  const queryLimit = req.query.limit;
  try {
    const selectResult = await productModel.selectAllProduct(queryLimit);
    if (selectResult.rowCount > 0) {
      return commonHelper.response(
        res,
        selectResult.rows,
        200,
        "Get all Product success"
      );
    } else {
      return commonHelper.response(res, null, 404, "No keranjang available");
    }
  } catch (error) {
    console.log(error);
    return commonHelper.response(res, null, 500, "Failed to getAllkeranjang");
  }
};

const getDetailProduct = async (req, res) => {
  // Set param id as const
  const queryId = req.params.id;
  try {
    const selectResult = await productModel.selectDetailProduct(queryId);
    // Check the affected row
    if (selectResult.rowCount > 0) {
      return commonHelper.response(
        res,
        selectResult.rows,
        200,
        "Get detail product success"
      );
    } else {
      return commonHelper.response(
        res,
        selectResult.rows,
        404,
        "product not found"
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

const addProduct = async (req, res) => {
  // Generate Id
  // req.body.queryId = uuidv4();
  try {
    const insertResult = await productModel.insertProduct(req.body);
    return commonHelper.response(res, insertResult.rows, 200, "product added");
  } catch (error) {
    console.log(error);
    if (error.detail && error.detail.includes("already exists.")) {
      return commonHelper.response(res, null, 400, "Product already exist");
    } else if (error.detail && error.detail.includes('is not present in table "categories".')) {
      return commonHelper.response(res, null, 400, "Category id is not present in table categories")
    }
    return commonHelper.response(res, null, 500, "Failed to add product");
  }
};

const editProduct = async (req, res) => {
  // Set param id as const
  const queryId = req.params.id;
  req.body.queryId = queryId;
  // Update other field
  try {
    const updateResult = await productModel.updateProduct(req.body);
    if (updateResult.rowCount > 0) {
      return commonHelper.response(
        res,
        updateResult.rows,
        200,
        "Product edited"
      );
    } else {
      return commonHelper.response(res, null, 404, "Product not found");
    }
  } catch (error) {
    console.log(error);
    if (error.detail && error.detail.includes("already exists.")) {
      return commonHelper.response(res, null, 400, "Product already exist");
    } else if (error.detail && error.detail.includes('is not present in table "categories".')) {
      return commonHelper.response(res, null, 400, "Category id is not present in table categories")
    }
    return commonHelper.response(res, null, 500, "Failed to edit product");
  }
};

const deleteProduct = async (req, res) => {
  // Set param id as const
  const queryId = req.params.id;
  try {
    const deleteResult = await productModel.deleteProduct(queryId);
    if (deleteResult.rowCount > 0) {
      return commonHelper.response(
        res,
        deleteResult.rows,
        200,
        "product deleted"
      );
    } else {
      return commonHelper.response(res, null, 404, "product not found");
    }
  } catch (error) {
    console.log(error);
    return commonHelper.response(res, null, 500, "Failed to delete product");
  }
};

module.exports = {
  getAllProduct,
  getDetailProduct,
  addProduct,
  editProduct,
  deleteProduct,
};
