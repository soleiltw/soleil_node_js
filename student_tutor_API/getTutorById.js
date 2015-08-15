/**
 * @api {get} /tutor/:id Get a Tutor by Id
 * @apiVersion 1.0.0
 * @apiName Select tutor by id
 * @apiGroup Tutor
 *
 * @apiParam {String} id Tutor's unique ID.
 *
 * @apiSuccess {String} _id Id of the Tutor.
 * @apiSuccess {String} name Name of the Tutor.
 * @apiSuccess {Document} _refSubject Reference to Tutor's expert subject.
 * @apiSuccess {Document} _refOwnQuestion Reference to Tutor's own question.
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "_id": "55b7890f7640e70d96612bb1",
 *   "name": "anderson",
 *   "_refSubject": {
 *       "_id": "55b198f0e4b03e734e912c89",
 *       "subject": "english"
 *   },
 *   "_refOwnQuestion": {
 *       "_id": "55b4d34be4b01d0a17cddfae",
 *       "content": "struggle in ref"
 *   }
 * }
 *
 * @apiError TutorNotFound The id of the Tutor was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "TutorNotFound"
 *     }
 */

var TutorModel = require('./models/tutor');

function get(req, res){
	TutorModel.findOne({_id: req.params.id})
		.populate('_refSubject', 'subject')
		.populate('_refOwnQuestion', 'content')
		.exec(function (err, tutor) {
    if (!err) {
		res.json(tutor);
		
    } else {
		res.json({});
		console.log(err);
    }
	});//.populate('refSubject').exec()
}

exports.get = get;