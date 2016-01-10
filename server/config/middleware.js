var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var express = require('express');

module.exports = function(app, express){

  app.use(morgan('dev'));

  app.use(express.static(path.join(__dirname,"../../client")));

  app.get('/',function(req, res){
    // res.sendFile(__dirname + "../../client/index.html");
    // res.send('Hello world!');
  })


}