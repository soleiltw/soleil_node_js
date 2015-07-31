var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Student = new Schema({
    name: { type: String, required: true }
});

module.exports = mongoose.model('Student', Student, 'student');