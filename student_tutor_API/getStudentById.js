/**
 * @api {get} /student/:id Get a Student by Id
 * @apiVersion 1.0.0
 * @apiName Select student by id
 * @apiGroup Student
 *
 * @apiParam {String} id Student's unique ID.
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
 * @apiError StudentNotFound The id of the Student was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "StudentNotFound"
 *     }
 */

var StudentModel = require('./models/student');

function get(req, res) {
    StudentModel.find({_id: req.params.id}, function (error, data) {
        res.json(data);
    });
}

exports.get = get;