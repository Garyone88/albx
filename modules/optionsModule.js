const mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'baixiu'
})

module.exports = {
    addNavMenus(obj,callback){
        var sql = "select * from options where `key`= 'nav_menus'"
        connection.query(sql,(err,data)=>{
            if(err){
                callback(err)
            }else{
                var menus;
                if(data[0]){
                    menus = JSON.parse(data[0].value || '[]')
                }else{
                    menus = '[]'
                }
                menus.push(obj);
                menusStr = JSON.stringify(menus)
                console.log(menusStr);
                sql = `update options set value = '${menusStr}' where id = 9`
                connection.query(sql,err=>{
                    if(err){
                        callback(err)
                    }
                    else{
                        callback(null)
                    }
                })
            }
        })
    }
};
