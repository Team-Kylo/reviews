const Faker = require('faker');
let schema = require('./schema.js');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reviews');



// Formatted date maker
let dateFormatter = () => {
  var date = Faker.date.past().toString();
  var dateFormatted = date.substring(4, 10) + ',' + date.substring(10, 15)
  return dateFormatted
}

// Weighted rating generator function
let ratingGenerator = () => {
  var randomNum = Math.random() * 10;
  if (randomNum > 0 && randomNum < 5) {
    return 5;
  } else if (randomNum > 5 && randomNum < 6.5) {
    return 4;
  } else if (randomNum > 6.5 && randomNum < 8) {
    return 3;
  } else if (randomNum > 8 && randomNum < 9) {
    return 2;
  } else {
    return 1;
  }
}

// for 100 entries
for (var i = 0; i < 100; i++) {
  // create individual objects
  let document = new schema.Reviews({
    // object id is the index
    dbId: i,
    // object username is Faker.internet.userName()
    username: Faker.internet.userName(),
    // object date is dateFormatter function
    datePosted: dateFormatter(),
    // object imageURL https://www.placecage.com/30/30
    imageUrl: 'https://www.placecage.com/30/30',
    // object AVATARIMGURL https://www.placecage.com/50/50
    avatarImgUrl: 'https://www.placecage.com/50/50',
    // object text is Faker.lorem.paragraph()
    text: Faker.lorem.paragraph(),
    // object rating is a call to helper function to 'create randomized ratings'
    rating: ratingGenerator()
  })
  .save()
}

