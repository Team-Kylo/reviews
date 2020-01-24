var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
  id: Number,
  username: String,
  datePosted: Date,
  imageUrl: String,
  avatarImgUrl: String,
  text: String,
  rating: Number
})

var Reviews = mongoose.model('Reviews', reviewSchema);

module.exports.Reviews = Reviews