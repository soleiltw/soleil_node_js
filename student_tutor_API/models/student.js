var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Student = new Schema({
    name: { type: String, required: true }
    created_at: { type: Date, default: Date.now },
    quota: { type: Number, required: true}
});

module.exports = mongoose.model('Student', Student, 'student');