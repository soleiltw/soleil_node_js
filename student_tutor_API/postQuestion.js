/**
 * @api {post} /question/add Create a new Question
 * @apiVersion 1.0.0
 * @apiName Create a new Question
 * @apiGroup Question
 *
 * @apiParam {String} name Question's name to add.
 * @apiParam {String} content Content of the Question.
 * @apiParam {String} subjectId Reference to Subject of the Question.
 * @apiParam {String} studentId Reference to Student of the Question.
 * @apiParam {String} answerId Reference to Answer of the Question.
 *
 * @apiSuccess {String} _id Id of the Question.
 * @apiSuccess {String} content Content of the Question.
 * @apiSuccess {String} subjectId Reference to Subject of the Question.
 * @apiSuccess {String} studentId Reference to Student of the Question.
 * @apiSuccess {String} answerId Reference to Answer of the Question.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id": "55c0b2c5ec6ace9429a3af13",
 *       "content": "how to expert node.js",
 *       "_refSubject": "55cfgjr5ec6ace9429a45678",
 *       "_refStudent": "88crhbe5ec6ace9429a56897",
 *       "_refAnswer": "35cerhg5ec6ace9429a12658"
 *     }
 *
 */

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