const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const port = process.env.PORT;
const db = require('../db/index.js');
let Reviews = require('../db/schema.js');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// a route to request all review objects from the db
app.get('/reviews', (req, res) => {
  db.schema.Reviews.find({})
    .then((dbObj) => {
      res.send(dbObj[Math.ceil(Math.random() * 100)]);
  })
    .catch((err) => {
      if (err) {
        res.sendStatus(404);
      }
    });
})

app.listen(port, () => {
  console.log(`Tuning into ${port}`);
})