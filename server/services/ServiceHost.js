const express = require('express');
const bodyParser = require('body-parser');
var db = require('../configuration/config');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var insertOptions = { force: false };

db.sequelize.sync(insertOptions).then(result => {
    //console.log("Database Sync Result: " + printObject(result));
    console.log("Database Connected and Sync Result is  " + result);

}).catch(err => {
    console.log("Database Sync Error: " + err);
});

const whiteList = [
    'http://localhost:3000/',
];

const corsOptionsDelegate = function (req, callback) {
    let corsOptions;
    // console.log('header is', req.header('Origin'), '\n', req.url);
    if (whiteList.indexOf(req.header('Origin')) !== -1)
        corsOptions = { origin: true };
    else 
        corsOptions = { origin: false };

    callback(null, corsOptions);
};

app.use(cors(corsOptionsDelegate));

module.exports.expressApp = app;
module.exports.sequelize = db.sequelize;
module.exports.Express = express;