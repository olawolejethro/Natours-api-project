const express = require("express");
const app = express();
const tourRoute = require("./route/tourRoute");

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use("/api/v1/tours", tourRoute);

app.get("/", (req, res) => {
  res.status(200).json("welcome to homepage");
});

module.exports = app;
