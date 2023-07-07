// Import environtment variable
require("dotenv").config();

// Import
const mainRouter = require("./src/router/index"); // Import main router
const express = require("express"); // Import express library
const app = express(); // Import express
const cors = require("cors"); // Import cors
const commonHelper = require("./src/helper/common");
const midtransClient = require("midtrans-client");

const midtransCore = new midtransClient.CoreApi({
  isProduction: false,
  serverKey: "Mid-server-qLSIv_yn0EW-zBYRAele6vqJ",
  clientKey: "Mid-client-thHn1qpXvtWgFObg",
});
// Use middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://server-skripsi-2-production.up.railway.app/"],
    methods: ["GET", "PUT", "POST", "DELETE"],
  })
);

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

app.post("/process-payment", async (req, res) => {
  try {
    // Menyiapkan payload pembayaran
    const paymentPayload = {
      transaction_details: {
        order_id: "ORDER_ID",
        gross_amount: 100000,
      },
      credit_card: {
        secure: true,
      },
    };

    // Melakukan pembayaran
    const response = await midtransCore.charge(paymentPayload);

    // Menyimpan informasi pembayaran ke database atau melakukan tindakan lainnya

    // Mengirim respon ke frontend
    res.json(response);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Terjadi kesalahan dalam pemrosesan pembayaran" });
  }
});
