const mongoose = require("mongoose");
require("dotenv").config();

const app = require("./app");
const PORT = 3000;

const CONNECTION_URL = process.env.DB_CONNECTION_URL;

mongoose.connect(CONNECTION_URL);
mongoose.connection.on("connected", () => {
  console.log("connected to mongodb successfully");
});
mongoose.connection.on("error", (err) => {
  console.log(err);
  console.log("an error occured");
});

app.listen(PORT, () => {
  console.log(`app connected to server on  ${PORT}`);
});
