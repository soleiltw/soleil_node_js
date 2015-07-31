var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Tutor = new Schema({
    name: { type: String, required: true },
    _refSubject: { type: Schema.Types.ObjectId,  ref: 'Subject' },
    _refSubject2: { type: Schema.Types.ObjectId,  ref: 'Subject' },
    _refOwnQuestion: { type: Schema.Types.ObjectId,  ref: 'Question' }
});

module.exports = mongoose.model('TutorModel', Tutor, 'tutor');