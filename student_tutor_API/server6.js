/**
 * Created by sylvia on 2015/8/26.
 */

var express = require('express')
  , http = require('http')
  , mongoose = require('mongoose')
  , json = require('json')
  , path = require('path')
  , favicon = require('serve-favicon')
  , bodyParser = require('body-parser');

var config = require('./config');
var middleHandler = require("./middleHandler");
var cronjob = require("./cronjob");

var app = express();

mongoose.connect(config.database);

app.set('port', process.env.PORT || 3001);
app.set('superSecret', config.secret);
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); 

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
  cronjob.job;
});

