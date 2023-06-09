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
