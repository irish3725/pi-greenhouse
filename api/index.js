const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
const db = require('./queries');

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js Postgres and stuff' });
});

app.get('/Temp', db.getCurrentTemp);
app.get('/Humidity', db.getCurrentHumidity);
app.get('/Fan', db.getCurrentFanPower);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});


