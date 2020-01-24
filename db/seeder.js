var Faker = require('faker');

// var reviewSchema = new mongoose.Schema({
//   id: Number,
//   username: String,
//   datePosted: Date,
//   imageUrl: String,
//   avatarImgUrl: String,
//   text: String,
//   rating: Number
// })

// for 100 entries
  // create individual objects
  // object id is the index
  // object username is Faker.internet.userName()
  // object date is Faker.date.past()
  // object imageURL picsum.photos/30/30
  // object AVATARIMGURL picsum.photos/50/50
  // object text is Faker.lorem.paragraph()
  // object rating is a call to helper function to 'create randomized ratings'