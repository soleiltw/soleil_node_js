var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', User, 'user');