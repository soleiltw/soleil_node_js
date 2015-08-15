/**
 * @api {get} /tutors Get all Tutors
 * @apiVersion 1.0.0
 * @apiName List all Tutors
 * @apiGroup Tutor
 *
 *
 * @apiSuccess {String} _id Id of the Tutor.
 * @apiSuccess {String} name Name of the Tutor.
 * @apiSuccess {Document} _refSubject Reference to Tutor's expert subject.
 * @apiSuccess {Document} _refOwnQuestion Reference to Tutor's own question.
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * [
 *   {
 *       "_id": "55b7890f7640e70d96612bb1",
 *       "name": "anderson",
 *       "_refSubject": {
 *           "_id": "55b198f0e4b03e734e912c89",
 *           "subject": "english"
 *       },
 *       "_refOwnQuestion": {
 *       	 "_id": "55b4d34be4b01d0a17cddfae",
 *       	 "content": "struggle in ref"
 *       }
 *   },
 *   {
 *       "_id": "55b78b2281b9334c20282127",
 *       "name": "Jenny",
 *       "_refSubject": {
 *           "_id": "55b198d1e4b03e734e912c87",
 *           "subject": "math"
 *       },
 *       "_refSubject2": {
 *           "_id": "55b787c3b7c3c55a951b8071",
 *           "subject": "english"
 *       },
 *       "_refOwnQuestion": {
 *       	 "_id": "55cf0962e4b03e3f715048a7",
 *       	 "content": "how to expert node.js"
 *       }
 *   },
 *	 ...
 *  
 * ]
 */

var TutorModel = require('./models/tutor');
var SubjectModel = require('./models/subject');

function get(req, res){
	//TutorModel.find({ name : 'edward'}).populate('refSubject').exec(function(err, tutors_list){
	TutorModel.find().populate('_refSubject ').populate('_refSubject2').exec(function (err, tutors_list) {  //.populate('refSubject')
    if (!err) {
		res.json(tutors_list);
		
    } else {
		res.json({});
		console.log(err);
    }
	});//.populate('refSubject').exec()
}

exports.get = get;