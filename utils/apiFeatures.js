class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  filter() {
    // FILTERING
    const queryObj = { ...this.queryStringy };
    // console.log(queryObj);
    const excludedField = ["page", "sort", "limit", "fields"];
    excludedField.forEach((el) => delete queryObj[el]);

    // ADVANCE FILTERING
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    //  console.log(JSON.parse(queryStr));
    this.query.find(JSON.parse(queryStr));
    return this;
  }
  // SORTING
  sort() {
    if (this.queryString.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort("-createdAt");
    }
    return this;
  }

  limitField() {
    if (this.queryString.field) {
      const field = this.queryString.field.split(",").join(" ");
      this.query = this.query.select(field);
    } else {
      this.query = this.query.select("-__v");
    }
    return this;
  }
  pagination() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.query.limit * 1 || 10;
    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);

    return this;
  }
}

module.exports = APIFeatures;
