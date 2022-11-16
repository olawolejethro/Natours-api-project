const express = require("express");
const tourController = require("../controller/tourcontroller");

const router = express.Router();

router
  .route("/")
  .get(tourController.getAllTours)
  .post(tourController.createTour);

router
  .route("/:id")
  .get(tourController.gettourById)
  .patch(tourController.updatetour)
  .delete(tourController.deleteTour);

module.exports = router;
