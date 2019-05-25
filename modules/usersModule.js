const mysql = require('mysql')

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'baixiu'
})

module.exports = {
    getUserByEmail (email,callback) {
        var sql = 'select * from users where email = ?'
        connection.query(sql,[email],(err,data)=>{
            if(err){
                callback(err)
            }
            else{
                callback(null,data[0])
            }
        })
    }
}