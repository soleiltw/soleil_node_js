/**
 * Created by sylvia on 2015/7/11.
 */

var express = require('express')
  , http = require('http')
  , mongoose = require('mongoose')
  , json = require('json')
  , path = require('path')
  , favicon = require('serve-favicon')
  , bodyParser = require('body-parser')
  , jwt = require('jsonwebtoken');

var config = require('./config');
var middleHandler = require("./middleHandler");
var postQuestion = require("./postQuestion");
var postStudent = require("./postStudent");
var getStudentsAll = require("./getStudentsAll");
var getTutorsAll = require("./getTutorsAll");
var getStudentById = require("./getStudentById");
var getTutorById = require("./getTutorById");

var signupUser = require("./signupUser");
var loginUser = require("./loginUser");
var listUser = require("./listUser");
var profileUser = require("./profileUser");

var app = express();

mongoose.connect(config.database);

app.set('port', process.env.PORT || 3000);
app.set('privateSecret', config.secret);
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); 

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

app.post('/question/add', postQuestion.post);
app.post('/student/add', postStudent.post);

app.post('/user/signup', signupUser.post);
app.post('/user/login', loginUser.post);
app.post('/users/list', middleHandler.middleHandler, listUser.get);
app.post('/user/profile', middleHandler.middleHandler, profileUser.get);

app.get('/students', getStudentsAll.get);
app.get('/students/orderby/date/descending', getStudentsAll.getDateDesc);
app.get('/students/orderby/date/ascending', getStudentsAll.getDateAsc);
app.get('/tutors', getTutorsAll.get);
app.get('/student/:id', getStudentById.get);
app.get('/tutor/:id', getTutorById.get);

// Test Data
/*SubjectModel.findOne({'subject': 'english'},function (error, subject) {

	QuestionModel.findOne({'content':'struggle in ref'},function(err, question) {

    var anderson = new TutorModel({
    	name: "anderson",
    	_refSubject: subject._id,
    	_refOwnQuestion: question._id
  	});
  
  	anderson.save(function (err) {
    if (err) console.log(err); // return handleError(err);
    else	console.log('anderson saved');
  	});
	});
});*/