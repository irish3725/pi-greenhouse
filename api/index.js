const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
const db = require('./queries');
const cors = require('cors');

// allow requests to come from this computer
app.use(cors());

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js Postgres and stuff' });
});

app.get('/temperature', db.getCurrentTemp);
app.get('/humidity', db.getCurrentHumidity);
app.get('/fan_power', db.getCurrentFanPower);
app.get('/stats/:rows', db.getStats);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});


