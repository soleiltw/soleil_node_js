/**
 * @api {get} /student/:id Get student by id
 * @apiName getStudentById
 * @apiGroup Student
 *
 * @apiParam {Number} id Student unique ID.
 *
 * @apiSuccess {String} _id Id of the User.
 * @apiSuccess {String} name Name of the User.
 * @apiSuccess {String} created_at Created time.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id": "55c0ad094f653b4822c3c7ce",
 *       "name": "jessy",
 *       "created_at": "2015-08-04T12:16:09.061Z",
 *       "__v": 0
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */

var StudentModel = require('./models/student');

function get(req, res) {
    StudentModel.find({_id: req.params.id}, function (error, data) {
        res.json(data);
    });
}

exports.get = get;