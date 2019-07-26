 const mongoose = require('mongoose');

const cigarettesSchema = mongoose.Schema({
  created_at: {
    type: Date,
    default: Date.now
  },
});

// Export Cigarrette model
var Cigarette = module.exports = mongoose.model('Cigarette', cigarettesSchema);
module.exports.get = function (callback, limit) {
  Cigarette.find(callback).limit(limit);
}