var mysql = require('mysql');

//buat koneksi database
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'widyama2_simakol',
    port: '3306'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('Mysql terkoneksi dengan baik');
});

module.exports = conn;