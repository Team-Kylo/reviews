var mongoose = require('mongoose');
var schema = require('./schema.js');
mongoose.connect('mongodb://localhost/reviews');

var db = mongoose.connection;
db.on('error', () => {
  console.log('Error connecting to database')
})

db.once('open', () => {
  console.log('You\'ve connected to your database');
})
