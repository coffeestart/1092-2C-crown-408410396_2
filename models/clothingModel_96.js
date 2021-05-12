const db = require('../utils/database');

const Clothing_96 = class Clothing_96{
    constructor(id,name,cat_id,price,remote_url,local_url){
        this.id = id;
        this.name = name;
        this.cat_id = cat_id;
        this.price = price;
        this.remote_url = remote_url;
        this.local_url = local_url;
    }

    //Read
    static fetchAll(){
        return db.execute('SELECT * from crown_96_new.clothing_96');
    }
    static fetchProductByCategory(cid){
        return db.execute('SELECT * from crown_96_new.clothing_96 where cat_id = ?',[cid]);
    }
}

module.exports = Clothing_96;