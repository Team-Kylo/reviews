const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const env = require('dotenv').config();
const port = process.env.PORT;


app.use(express.static('./public'));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Tuning into ${port}`);
})