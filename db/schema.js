const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  dbId: Number,
  urlId: Number,
  username: String,
  datePosted: Date,
  imageUrl: String,
  avatarImgUrl: String,
  text: String,
  rating: Number,
  itemForSale: String,
});

const Reviews = mongoose.model('Reviews', reviewSchema);

module.exports.Reviews = Reviews;
