/**
 * @api {post} /user/login Login a User
 * @apiVersion 1.0.0
 * @apiName Login a User
 * @apiGroup User
 *
 * @apiParam {String} name User's name to add.
 * @apiParam {String} password User's password to encrypt.
 *
 * @apiSuccess {boolean} success If the request has suceeded.
 * @apiSuccess {String} message The action of the request.
 * @apiSuccess {String} token Token of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": true,
 *       "message": "User login",
 *       "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.
 *                 eyJfX3YiOjAsIm5hbWUiOiJ5dXkiLCJwYXNzd29yZCI6InNvbGVpbCIsIl9pZCI6IjU1Y2YyMjQ4YTg4YjlhMDMwMDJmM2Q4NSIsImNyZWF0ZWRfYXQiOiIyMDE1LTA4LTE1VDExOjI4OjA4Ljk4NVoifQ.
 *                 ijvidIxKSms5iovehxxIHlDsJyFeYLe63lKzvtZ7wa4"
 *     }
 *
 * @apiError WrongUsername Authentication failed. User not found.
 * @apiError WrongPassword Authentication failed. Wrong password.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Request denied.
 *     {
 *       "success": false,
 *       "message": "Authentication failed. User not found."  
 *     }
 */

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