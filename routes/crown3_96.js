var express = require('express');
var router = express.Router();
// get the client

const categories = require('../data/categories_96.js');

const crown3Crontroller_96 = require('../controllers/crown3Controller_96');
// now get a Promise wrapped instance of that pool
//const db = require('../utils/database.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown3_96', { 
    title: 'WANG CHIACHING 408410396 (static)',
    data: categories 
  });
});

router.get('/homepage', crown3Crontroller_96.getHomepage );

router.get('/shop_96/:product', crown3Crontroller_96.getProductByCategory);


module.exports = router;
