const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tourSchema = new Schema({
  name: {
    type: String,
    required: [true, "A tour must have a name"],
  },
  duration: {
    type: Number,
    required: [true, "A tour must have a duration"],
  },
  maxGroupSize: {
    type: Number,
    required: [true, "A tour must have a group size"],
  },
  difficulty: {
    type: String,
    required: [true, "A tour must have a diffculty"],
  },
  ratingAvarage: {
    type: Number,
    default: 4.5,
  },
  ratingsQuatity: {
    type: Number,
    default: 0,
  },

  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, "A tour must have a price"],
  },
  priceDiscout: Number,
  summary: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, "A tour must have cover image"],
  },
  image: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  startDatas: [Date],
});

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
