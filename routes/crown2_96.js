var express = require('express');
var router = express.Router();
// get the client

const categories = require('../data/categories_96.js');

// now get a Promise wrapped instance of that pool
//const db = require('../utils/database.js');

const Category_96 = require('../models/categoryModel_96');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown2_96', { 
    title: 'WANG CHIACHING 408410396 (static)',
    data: categories 
  });
});

router.get('/homepage',async function(req, res, next) {
  let data;
  const [rows] = await Category_96.fetchAll();
  data=rows;
  //res.json(data);
  res.render('crown2_96', { 
  title: 'WANG CHIACHING 408410396 (async/await)',
  data
  });
});

module.exports = router;
