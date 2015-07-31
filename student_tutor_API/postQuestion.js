var QuestionModel = require('./models/question');

function post(req, res){
	console.log("qustion add req: " + req.body);
	var question;
	
	question = new QuestionModel({
		content: req.body.content,
		_refSubject: req.body.subjectId,
        _refStudent: req.body.studentId,
        _refAnswer: req.body.answerId
	});
	
	question.save(function (err) {
		if (!err) {
			return console.log("created");
		} else {
			//TODO: return page with errors
			return console.log(err);
		}
	});

}

exports.post = post;