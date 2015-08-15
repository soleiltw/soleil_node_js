/**
 * @api {post} /user/signup Sign up a User
 * @apiVersion 1.0.0
 * @apiName Sign up a User
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
 *       "message": "Sign up",
 *       "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.
 *                 eyJfX3YiOjAsIm5hbWUiOiJ5dXkiLCJwYXNzd29yZCI6InNvbGVpbCIsIl9pZCI6IjU1Y2YyMjQ4YTg4YjlhMDMwMDJmM2Q4NSIsImNyZWF0ZWRfYXQiOiIyMDE1LTA4LTE1VDExOjI4OjA4Ljk4NVoifQ.
 *                 ijvidIxKSms5iovehxxIHlDsJyFeYLe63lKzvtZ7wa4"
 *     }
 *
 */

var UserModel = require('./models/user');
var config = require('./config');
var jwt = require('jsonwebtoken');
var express = require('express');
var app = express();
app.set('superSecret', config.secret);

function post(req, res){
	console.log("qustion add req: " + req.body);
	var user;
	
	user = new UserModel({
		name: req.body.name,
		password: req.body.password
	});
	
	user.save(function (err) {
		if (!err) {
			console.log("created");
			// create a token
        	var token = jwt.sign(user, app.get('superSecret'), {
          		expiresInMinutes: 1440 // expires in 24 hours
        	});

        	// return the information including token as JSON
        	res.json({
          		success: true,
          		message: 'Sign up',
          		token: token
        	});

		} else {
			//TODO: return page with errors
			return console.log(err);
		}
	});

}

exports.post = post;