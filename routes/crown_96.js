var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown_96', { title: 'WANG CHIACHING 408410396' });
});

module.exports = router;
