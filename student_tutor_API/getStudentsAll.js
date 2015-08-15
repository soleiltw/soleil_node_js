/**
 * @api {get} /student Get all Students
 * @apiVersion 1.0.0
 * @apiName List all students
 * @apiGroup Student
 *
 *
 * @apiSuccess {String} _id Id of the Student.
 * @apiSuccess {String} name Name of the Student.
 * @apiSuccess {String} created_at Creation time of the Student record.
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * [
 *   {
 *     "_id": "55c0b2c5ec6ace9429a3af13",
 *     "name": "sylvia",
 *     "created_at": "2015-08-04T12:40:37.923Z"
 *   },
 *   {
 *     "_id": "55c0ad094f653b4822c3c7ce",
 *     "name": "jessy",
 *     "created_at": "2015-08-04T12:16:09.061Z"
 *   }
 *	 ...
 *  
 * ]
 */

 /**
 * @api {get} /students/orderby/date/descending Get all Students order by date descending
 * @apiVersion 1.0.0
 * @apiName List all students order by date descending
 * @apiGroup Student
 *
 *
 * @apiSuccess {String} _id Id of the Student.
 * @apiSuccess {String} name Name of the Student.
 * @apiSuccess {String} created_at Creation time of the Student record.
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * [
 *   {
 *     "_id": "55c0b2c5ec6ace9429a3af13",
 *     "name": "sylvia",
 *     "created_at": "2015-08-04T12:40:37.923Z"
 *   },
 *   {
 *     "_id": "55c0ad094f653b4822c3c7ce",
 *     "name": "jessy",
 *     "created_at": "2015-08-04T12:16:09.061Z"
 *   },
 *	 ...
 *  
 * ]
 */

 /**
 * @api {get} /students/orderby/date/ascending Get all Students order by data ascending
 * @apiVersion 1.0.0
 * @apiName List all students order by data ascending
 * @apiGroup Student
 *
 *
 * @apiSuccess {String} _id Id of the Student.
 * @apiSuccess {String} name Name of the Student.
 * @apiSuccess {String} created_at Creation time of the Student record.
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * [
 *   {
 *     "_id": "55c0ad094f653b4822c3c7ce",
 *     "name": "jessy",
 *     "created_at": "2015-08-04T12:16:09.061Z"
 *   }
 *   {
 *     "_id": "55c0b2c5ec6ace9429a3af13",
 *     "name": "sylvia",
 *     "created_at": "2015-08-04T12:40:37.923Z"
 *   },
 *	 ...
 *  
 * ]
 */
 
var StudentModel = require('./models/student');

function get(req, res){
	//TutorModel.find({ name : 'edward'}).populate('refSubject').exec(function(err, tutors_list){
	var sort2 = req.params.orderby;
	console.log(sort2);
	StudentModel.find().sort({sort2: -1})
		.exec(function (err, students_list) {  //.populate('refSubject')
    if (!err) {
		res.json(students_list);
		
    } else {
		res.json({});
		console.log(err);
    }
	});
}

function getDateDesc(req, res){
	//TutorModel.find({ name : 'edward'}).populate('refSubject').exec(function(err, tutors_list){

	StudentModel.find().sort({created_at: -1})
		.exec(function (err, students_list) {  //.populate('refSubject')
    if (!err) {
		res.json(students_list);
		
    } else {
		res.json({});
		console.log(err);
    }
	});
}

function getDateAsc(req, res){
	//TutorModel.find({ name : 'edward'}).populate('refSubject').exec(function(err, tutors_list){

	StudentModel.find().sort({created_at: 1})
		.exec(function (err, students_list) {  //.populate('refSubject')
    if (!err) {
		res.json(students_list);
		
    } else {
		res.json({});
		console.log(err);
    }
	});
}

exports.get = get;
exports.getDateDesc = getDateDesc;
exports.getDateAsc = getDateAsc;