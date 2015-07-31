var StudentModel = require('./models/student');

function get(req, res){
	//TutorModel.find({ name : 'edward'}).populate('refSubject').exec(function(err, tutors_list){
	StudentModel.find()
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