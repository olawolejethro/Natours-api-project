const fs = require("fs");

const mongoose = require("mongoose");
require("dotenv").config();
const tourModel = require("../../model/tourmodel");

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

// IMPORT DATA INTO DB
// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/tours-simple.json", "utf-8`)
// );
// const imporData = async () => {
//   try {
//     await tourModel.create(tours);
//     console.log("data created succefully");
//   } catch (error) {
//     console.log(error);
//   }
// };

// DELETE ALL DATA FROM DB

const deleteData = async () => {
  try {
    await tourModel.deleteMany();
    console.log("data deleted succefully");
  } catch (error) {
    console.log(error);
  }
};

console.lof(process.argv);
