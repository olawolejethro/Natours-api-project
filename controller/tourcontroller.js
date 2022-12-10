const tourModel = require("../model/tourmodel");
const APIFeatures = require("../utils/apiFeatures");
exports.aliasTopTour = (req, res, next) => {
  req.query.limit = "5";
  req.query.sort = "-ratingaverage,price";
  req.query.field = "name,price,ratingAverage,summary,difficulty";
  next();
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await tourModel.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        tour: newTour,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error,
    });
  }
};

exports.getAllTours = async (req, res) => {
  try {
    // EXCEUTING QUERY
    const features = new APIFeatures(tourModel.find(), req.query)
      .filter()
      .sort()
      .limitField()
      .pagination();
    const tours = await features.query;
    // SNED RESPONSE
    res.status(201).json({
      status: "success",

      data: {
        length: tours.length,
        tour: tours,
      },
    });
  } catch (error) {
    throw error;
    res.status(400).json({
      status: "failed",
      // message: error,
    });
  }
};

exports.getTourById = async (req, res) => {
  try {
    const tour = await tourModel.findById(req.params.id);
    res.status(201).json({
      status: "success",
      data: {
        tour: tour,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error,
    });
  }
};

exports.updatetour = async (req, res) => {
  try {
    const tour = await tourModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(201).json({
      status: "success",
      data: {
        tour: tour,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error,
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    await tourModel.findByIdAndDelete(req.params.id);
    res.status(201).json({
      status: "success",
      data: "null",
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error,
    });
  }
};
