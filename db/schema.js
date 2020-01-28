const mongoose = require('mongoose');

let reviewSchema = new mongoose.Schema({
  dbId: Number,
  username: String,
  datePosted: Date,
  imageUrl: String,
  avatarImgUrl: String,
  text: String,
  rating: Number,
  itemForSale: String
})

let Reviews = mongoose.model('Reviews', reviewSchema);

module.exports.Reviews = Reviews