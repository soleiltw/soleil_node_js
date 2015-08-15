/**
 * @api {post} /user/profile Show User profile
 * @apiVersion 1.0.0
 * @apiName Show User profile
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
 *   {
 *       "_id": "55c885ca1718dbc409d77352",
 *       "name": "angela",
 *       "password": "********",
 *       "created_at": "2015-08-10T11:06:50.251Z"
 *   }
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

function get(req, res){

	res.json(req.decoded);

}

exports.get = get;