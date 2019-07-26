// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome',
    });
});
// Import feed controller
// var feedController = require('./feedController');
// Feed routes
// router.route('/feeds')
//     .get(feedController.index)
//     .post(feedController.new);


// Export API routes
module.exports = router;