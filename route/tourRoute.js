const express = require("express");
const tourController = require("../controller/tourcontroller");

const router = express.Router();

router
  .route("/tpo-5-cheap")
  .get(tourController.aliasTopTour, tourController.getAllTours);
router
  .route("/")
  .get(tourController.getAllTours)
  .post(tourController.createTour);

router
  .route("/:id")
  .get(tourController.getTourById)
  .patch(tourController.updatetour)
  .delete(tourController.deleteTour);

module.exports = router;
