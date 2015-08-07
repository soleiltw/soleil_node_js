function get(req, res){

	res.json(req.decoded);

}

exports.get = get;