const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

const routes = require('../app/routers/routes');
app.use('/', routes);

module.exports = app;
