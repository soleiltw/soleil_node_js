var StudentModel = require('./models/student');

function get(req, res) {
    StudentModel.find({_id: req.params.id}, function (error, data) {
        res.json(data);
    });
}

exports.get = get;