const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const port = process.env.PORT;


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Tuning into ${port}`);
})