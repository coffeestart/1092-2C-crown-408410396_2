const db = require('../utils/database');

const Category_96 = class Category_96{
    constructor(id,name,size,remote_url,local_url){
        this.id = id;
        this.name = name;
        this.size = size;
        this.remote_url = remote_url;
        this.local_url = local_url;
    }

    //Read
    static fetchAll(){
        return db.execute('SELECT * from category_96');
    }
}

module.exports = Category_96;