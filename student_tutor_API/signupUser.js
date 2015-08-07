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