const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "baixiu"
});

module.exports = {
  getAllCate(callback) {
    var sql = "select * from categories";
    connection.query(sql, (err, data) => {
      if (err) callback(err);
      else callback(null, data);
    });
  },
  cateAdd(obj, callback) {
    var sql = "insert categories values(null,?,?)";
    connection.query(sql, [obj.slug, obj.name], err => {
      if (err) callback(err);
      else callback(null);
    });
  },
  cateEdit(obj,callback) {
    var sql = "update categories set ? where id = ?"
    connection.query(sql,[obj,obj.id],err=>{
      if (err) callback(err);
      else callback(null);
    })
  },
  delCateById(id, callback) {
    var sql = "delete from categories where id = ?";
    connection.query(sql, [id], err => {
      if (err) callback(err);
      else callback(null);
    });
  },
  cateDels(ids,callback) {
      var sql = `delete from categories where id in (${ids})`;
      connection.query(sql,err=>{
        if (err) callback(err);
        else callback(null);
      })    
  }
};
