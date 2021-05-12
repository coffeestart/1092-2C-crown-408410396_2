const mysql = require('mysql2');

// create data basethe connection
const pool = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'wilson4407',
    database: 'crown_96'
   }
 );

 module.exports = pool.promise();