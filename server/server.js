//////////////////// Imports ////////////////////
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/config');
const URI = require('./db/index');
const routes = require('./routes/index');
const path = require('path');

//////////////////// Set configurations ////////////////////
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(routes);

app.use(express.static(path.join(__dirname, 'public')));
//////////////////// Start server ////////////////////
(async function () {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
        console.log("DB is ready")
    } catch (error) {
        console.log("DB connection fail: " + error)
    }
})()

app.listen(config.PORT, () => {
    console.log('Server is ready');
})