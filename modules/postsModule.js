const mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "baixiu"
});

module.exports = {
  getAllposts(query, callback) {
    var sql = `SELECT posts.id,posts.title,users.nickname,categories.name,posts.created,posts.status FROM posts
        INNER JOIN users on posts.user_id = users.id
        INNER JOIN categories on posts.category_id = categories.id
        WHERE 1 = 1 `;

    if (query.category_id) {
      sql += ` AND posts.category_id = ${query.category_id}`;
    }
    if (query.status) {
      sql += ` AND posts.status = '${query.status}'`;
    }

    sql += ` ORDER BY posts.id DESC
        LIMIT ${(query.page - 1) * query.pageSize},${query.pageSize}`;

    connection.query(sql, (err, data) => {
      if (err) callback(err);
      else {
        sql = "select count(*) total from posts";
        connection.query(sql, (err, dataCount) => {
          callback(null, { data: data, total: dataCount[0].total });
        });
      }
    });
  },

  postAdd(obj, callback) {
    var sql = "insert into posts set ?";
    connection.query(sql, [obj], err => {
      if (err) callback(err);
      else callback(null);
    });
  },

  getPostById(id, callback) {
    var sql = `select * from posts where id = ${id}`;
    connection.query(sql, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data[0]);
      }
    });
  },

  editPostById(obj,callback) {
    var sql = `update posts set ? where id = ${obj.id}`;
    connection.query(sql,[obj], err=> {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    });
  }
};
