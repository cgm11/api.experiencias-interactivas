//////////////////// Imports ////////////////////
const express = require('express');
const experiences = require('./experiencesRouter');

//////////////////// Set configurations ////////////////////
const app = express();

//////////////////// Endpoints ////////////////////
app.use('/', experiences);

module.exports = app;