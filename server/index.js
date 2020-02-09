const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const port = process.env.PORT;
const db = require('../db/index.js');
let Reviews = require('../db/schema.js');
const expressStaticGzip = require('express-static-gzip');


app.use('/', expressStaticGzip(__dirname + '/public', {
  enableBrotli: true,
  orderPreference: ['br', 'gz'],
  setHeaders: function (res) {
     res.setHeader("Cache-Control", "public, max-age=31536000");
  }
}));

app.use(bodyParser.json());

// a route to request all review objects from the db
app.get('/reviews/:id', (req, res) => {
  const id = req.params.id;
  db.schema.Reviews.find({dbId: id})
    .then((dbObj) => {
      res.json(dbObj);
    })
    .catch((err) => {
      if (err) {
        res.sendStatus(404);
      }
    });
})

module.exports = app;