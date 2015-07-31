var StudentModel = require('./models/student');

function post(req, res){
    var student;
    console.log("POST: ");
    console.log(req.body);
    student = new StudentModel({
      name: req.body.name
    });

    student.save(function (err) {
      if (!err) {
        return console.log("created");
      } else {
        return console.log(err);
      }
    });
    return res.send(student);
  }

  exports.post = post;