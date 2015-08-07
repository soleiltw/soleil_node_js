var UserModel = require('./models/user');
var config = require('./config');
var middleHandler = require("./middleHandler");
var jwt = require('jsonwebtoken');
var express = require('express');
var app = express();
app.set('superSecret', config.secret);

function post(req, res){
  console.log("qustion add req: " + req.body);
  // find the user
  UserModel.findOne({
    name: req.body.name
  }, function(err, user) {

    if (err) throw err;

    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {

      // check if password matches
      if (user.password != req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {

        // if user is found and password is right
        // create a token
        var token = jwt.sign(user, app.get('superSecret'), {
          expiresInMinutes: 1 // expires in 24 hours
        });

        // return the information including token as JSON
        res.json({
          success: true,
          message: 'User login',
          token: token
        });
      }   

    }

  });

}

exports.post = post;