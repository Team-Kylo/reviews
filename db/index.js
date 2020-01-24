const mongoose = require('mongoose');
let schema = require('./schema.js');
mongoose.connect('mongodb://localhost/reviews');
// let newInstanceTest = new schema.Reviews({
//   id: 1,
//   username: 'Zach',
//   datePosted: new Date(),
//   imageUrl: 'url',
//   avatarImgUrl: 'url',
//   text: 'Text',
//   rating: 5
// }).save().then(() => {
//   console.log('You saved this!')
// })
const db = mongoose.connection;
db.on('error', () => {
  console.log('Error connecting to database')
})

db.once('open', () => {
  console.log('You\'ve connected to your database');
})
