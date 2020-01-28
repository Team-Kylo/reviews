let app = require('./index.js');
require('dotenv').config();
let port = process.env.PORT;

app.listen(port, () => {
  console.log(`Tuning in on ${port}`);
});