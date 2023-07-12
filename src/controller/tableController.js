// Import model
const tableModel = require("../model/tableModel");
// Import Helper for Template Response
const commonHelper = require("../helper/common");
// Import random id
const { v4: uuidv4 } = require("uuid");

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

const getDetailTablebyName = async (req, res) => {
  // Set param id as const
  const queryId = req.params.id;
  console.log("hmm", req);
  try {
    const selectResult = await tableModel.selectDetailName(queryId);
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
  req.body.id_tables = uuidv4();
  try {
    const insertResult = await tableModel.insertTable(req.body);
    return commonHelper.response(res, [req.body], 200, "table added");
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

const checkoutMidtrans = async (req, res) => {
  const order_id = req.body.id_tables;
  const gross_amount = req.body.total_bayar;
  const first_name = req.body.name;
  // const last_name = req.body.last_name;
  // const email = req.body.email;
  const phone = req.body.no_telp;

  try {
    const midtransClient = require("midtrans-client");
    // Create Snap API instance
    let snap = new midtransClient.Snap({
      // Set to true if you want Production Environment (accept real transaction).
      isProduction: false,
      serverKey: "SB-Mid-server-o8AeFK89-NJwJwf6QY1RMTgu",
    });

    let parameter = {
      transaction_details: {
        order_id,
        gross_amount,
      },
      credit_card: {
        secure: true,
      },
      customer_details: {
        first_name,
        // last_name,
        // email,
        phone,
      },
      // payment_type: gopay,
      // gopay_partner: {
      //   phone_number: phone,
      //   country_code: 62,
      //   redirect_url: "https://www.gojek.com",
      // },
    };

    snap
      .createTransaction(parameter)
      .then((transaction) => {
        // transaction token
        let transactionToken = transaction.token;
        console.log("transactionToken:", transactionToken);
        res.send(transactionToken);
        // console.log("transaksi:", transaction);
      })
      .catch((e) => {
        e.message; // basic error message string
        e.httpStatusCode; // HTTP status code e.g: 400, 401, etc.
        e.ApiResponse; // JSON of the API response
        e.rawHttpClientData; // raw Axios response object
      });
  } catch (error) {
    console.log(error);
    return commonHelper.response(res, null, 500, "Failed to get all Admin");
  }
};

module.exports = {
  getAllTable,
  getDetailTable,
  getDetailTablebyName,
  addTable,
  editTable,
  // editTableEnd,
  deleteTable,
  checkoutMidtrans,
};
