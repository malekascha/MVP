var express = require('express');
var mongoose = require('mongoose');

var port = 3000;

var app = express();

require('./config/middleware.js')(app, express);




app.listen(port);

console.log('Now listening on port: ' + port);