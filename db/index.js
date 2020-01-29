const mongoose = require('mongoose');
let schema = require('./schema.js');
mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', () => {
  console.log('Error connecting to database')
})

db.once('open', () => {
  console.log('You\'ve connected to your database');
})

module.exports.schema = schema;