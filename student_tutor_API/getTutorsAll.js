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