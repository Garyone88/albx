const postsModule = require("../modules/postsModule");
const moment = require("moment");

module.exports = {
  getAllposts(req, res) {
    postsModule.getAllposts(req.query, (err, obj) => {
      // console.log(obj);
      if (err) {
        console.log(err);
        res.json({
          code: 201,
          msg: "服务器异常，请重试"
        });
      } else {
        for (var i = 0; i < obj.data.length; i++) {
          obj.data[i].created = moment(obj.data[i].created).format(
            "YYYY-MM-DD HH:mm:ss"
          );
        }
        res.json({
          code: 200,
          msg: "查询成功",
          data: obj
        });
      }
    });
  },

  postAdd(req, res) {
    req.body.id = null;
    req.body.likes = 0;
    req.body.views = 0;
    req.body.user_id = req.session.currentUser.id;
    //   console.log(req.session.currentUser.id);
    //   console.log(req.body);
    postsModule.postAdd(req.body, err => {
      if (err) {
        console.log(err);
        res.json({
          code: 201,
          msg: "服务器异常，请重试"
        });
      } else {
        res.json({
          code: 200,
          msg: "添加成功"
        });
      }
    });
  },

  getPostById(req, res) {
    postsModule.getPostById(req.query.id, (err, data) => {
      data.created = moment(data.created).format("YYYY-MM-DDThh:mm");
      if (err) {
        console.log(err);
        res.json({
          code: 201,
          msg: "服务器异常，请重试"
        });
      } else {
        res.json({
          code: 200,
          msg: "查询成功",
          data: data
        });
      }
    });
  },

  editPostById(req, res) {
    postsModule.editPostById(req.body, err=> {
      if (err) {
        console.log(err);
        res.json({
          code: 201,
          msg: "服务器异常，请重试"
        });
      } else {
        res.json({
          code: 200,
          msg: "编辑成功",
        });
      }
    });
  }
};
