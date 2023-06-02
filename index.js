// Import environtment variable
require("dotenv").config();

// Import
const mainRouter = require("./src/router/index"); // Import main router
const express = require("express"); // Import express library

const commonHelper = require("./src/helper/common");

// Use middleware
app.use(express.json());
app.use(
  cors({
    origin: [`${process.env.FE}`],
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
