// Import environtment variable
require("dotenv").config();

// Import
const mainRouter = require("./src/router/index"); // Import main router
const express = require("express"); // Import express library
const app = express(); // Import express
const cors = require("cors"); // Import cors
const commonHelper = require("./src/helper/common");
const Pool = require("./src/config/db");

// Use middleware
app.use(express.json());
app.use(
  cors({
    origin: [
      "https://e-duren-site.vercel.app",
      "http://localhost:3000",
      "https://e-duren-daexaf.vercel.app",
      "https://master--e-duren-site.netlify.app",
    ],
    methods: ["GET", "PUT", "POST", "DELETE"],
  })
);

process.on("uncaughtException", function (err) {
  console.log(err);
});

// Port choice
const port = process.env.PORT || 4000;
// use Main Router
app.use("/", mainRouter);
// routes.initialize(app);
app.all("*", (req, res, next) => {
  next(commonHelper.response(res, null, 404, "URL not Found"));
});
// Listening port awaiting requests
app.listen(port, () => {
  console.log(`Server run on port: ${port}`);
});

// const CONSTAN = "bed46f71-a28c-4170-be6f-07b6d4fbe6fc";

// Pool.query(`SELECT * FROM tables WHERE id_tables='${CONSTAN}'`, (err, res) => {
//   if (err) {
//     console.error("Error executing query", err);
//   } else {
//     // console.log("Query result:", res.rows);
//     const id_tables = res;
//     // console.log(id_tables);
//   }
// });

// const midtransClient = require("midtrans-client");
// // Create Snap API instance
// let snap = new midtransClient.Snap({
//   // Set to true if you want Production Environment (accept real transaction).
//   isProduction: false,
//   serverKey: "SB-Mid-server-o8AeFK89-NJwJwf6QY1RMTgu",
// });

// let parameter = {
//   transaction_details: {
//     order_id: "bed46f71-a28c-4170-be6f-07b6d4fbe6fc",
//     gross_amount: 40000,
//   },
//   credit_card: {
//     secure: true,
//   },
//   customer_details: {
//     first_name: "Muhammad",
//     last_name: "Ihsan",
//     email: "ihsan.pra@example.com",
//     phone: "081211960435",
//   },
// };

// snap
//   .createTransaction(parameter)
//   .then((transaction) => {
//     // transaction token
//     let transactionToken = transaction.token;
//     console.log("transactionToken:", transactionToken);
//     // console.log("transaksi:", transaction);
//   })
//   .catch((e) => {
//     e.message; // basic error message string
//     e.httpStatusCode; // HTTP status code e.g: 400, 401, etc.
//     e.ApiResponse; // JSON of the API response
//     e.rawHttpClientData; // raw Axios response object
//   });
