var UserModel = require('./models/user');

function get(req, res){
	//TutorModel.find({ name : 'edward'}).populate('refSubject').exec(function(err, tutors_list){
	UserModel.find().exec(function (err, users_list) {  //.populate('refSubject')
    if (!err) {
		res.json(users_list);
		
    } else {
		res.json({});
		console.log(err);
    }
	});
}

exports.get = get;