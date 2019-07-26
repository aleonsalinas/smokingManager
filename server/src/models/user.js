const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  daily_cigarettes: Number,
  unit_price_cigarette: Number,
  no_smoking_start_time: {
    type: Date,
    default: null
  },
});

// Export User model
var User = module.exports = mongoose.model('User', userSchema);
module.exports.get = function (callback, limit) {
  User.find(callback).limit(limit);
}