var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Answer = new Schema({
    content: { type: String, required: true },
    title: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Answer', Answer,'answer');