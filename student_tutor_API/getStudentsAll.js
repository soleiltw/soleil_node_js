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