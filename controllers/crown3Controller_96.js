const Category_96 = require('../models/categoryModel_96');

const Clothing_96 = require('../models/clothingModel_96');

exports.getHomepage = async (reg, res) => {
    let data;
    const [rows] = await Category_96.fetchAll();
    data=rows;
    //res.json(data);
    res.render('crown3_96', { 
    title: 'WANG CHIACHING 408410396 (async/await)',
    data
    });
}

exports.getProductByCategory = async (req, res) => {   
    console.log('req.params',req.params.product);
    let data = {};
    data.cid = 0;
    if(req.params.product == 'hats_96') data.cid = 1;
    else if(req.params.product == 'jackets_96') data.cid = 2;
    else if(req.params.product == 'sneakers_96') data.cid = 3;
    else if(req.params.product == 'womens_96') data.cid = 4;
    else if(req.params.product == 'mens_96') data.cid = 5;
    const [rows] = await Clothing_96.fetchProductByCategory(data.cid);
    data.clothing = rows;
    res.render(req.params.product, { 
        data
    });
    //res.json(data.clothing);
}