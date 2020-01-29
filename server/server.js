const app = require('./index.js');
require('dotenv').config();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Tuning in on ${port}`);
});
