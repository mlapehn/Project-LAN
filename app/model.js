// Pulls Mongoose dependency for creating schemas
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;
// New schema
var eventSchema = new Schema({
  name: {type: String, required: true},
  url: {type: String, required: true},
})

module.exports = mongoose.model('LocalLan', eventSchema);
