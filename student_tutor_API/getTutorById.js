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