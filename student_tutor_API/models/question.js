var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Question = new Schema({
    content: { type: String, required: true },
    _refSubject: { type: Schema.Types.ObjectId,  ref: 'Subject' },
    _refStudent: { type: Schema.Types.ObjectId,  ref: 'Student' },
    _refAnswer: { type: Schema.Types.ObjectId,  ref: 'Answer' },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Question', Question,'question');