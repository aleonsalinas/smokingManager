const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    achived: Boolean,
    days_to_achive: Number,
});

// Export User model
var Goal = module.exports = mongoose.model('Goal', goalSchema);
module.exports.get = function (callback, limit) {
    Goal.find(callback).limit(limit);
}