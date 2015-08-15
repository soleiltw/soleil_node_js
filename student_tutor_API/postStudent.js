/**
 * @api {post} /student/add Create a new Student
 * @apiVersion 1.0.0
 * @apiName Create a new Student
 * @apiGroup Student
 *
 * @apiParam {String} name Student's name to add.
 *
 * @apiSuccess {String} _id Id of the Student.
 * @apiSuccess {String} name Name of the Student.
 * @apiSuccess {String} created_at Creation time of the Student record.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id": "55c0b2c5ec6ace9429a3af13",
 *       "name": "Sylvia",
 *       "created_at": "2015-08-04T12:40:37.923Z"
 *     }
 *
 */
 
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