/**
 * @api {post} /users/list List all Users
 * @apiVersion 1.0.0
 * @apiName List all Users
 * @apiGroup User
 *
 * @apiParam {String} token Verified token to authenticate.
 *
 * @apiSuccess {String} _id Id of the User.
 * @apiSuccess {String} name Name of the User.
 * @apiSuccess {String} password Password of the User.
 * @apiSuccess {String} created_at Creation time of the User record.
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * [
 *   {
 *       "_id": "55c885ca1718dbc409d77352",
 *       "name": "angela",
 *       "password": "********",
 *       "created_at": "2015-08-10T11:06:50.251Z"
 *   },
 *   {
 *       "_id": "55c8870a3202050821971d47",
 *       "name": "sylvia",
 *       "password": "******",
 *       "created_at": "2015-08-10T11:12:10.154Z"
 *   },
 *   ...
 * ]
 *
 * @apiError NoTokenProvided No token provided.
 * @apiError NoAccessRight Only with authenticated token can access the data.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Request denied.
 *     {
 *       "success": false,
 *       "message": "No token provided."  
 *     }
 */

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