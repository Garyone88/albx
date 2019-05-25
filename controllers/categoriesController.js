const cateModule = require("../modules/cateModule");
module.exports = {
  getAllCate(req, res) {
    cateModule.getAllCate((err, data) => {
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

  cateAdd(req, res) {
    cateModule.cateAdd(req.body, err => {
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

  cateEdit(req, res) {
    cateModule.cateEdit(req.body, err => {
      if (err) {
        console.log(err);
        res.json({
          code: 201,
          msg: "服务器异常，请重试"
        });
      } else {
        res.json({
          code: 200,
          msg: "编辑成功"
        });
      }
    });
  },

  delCateById(req, res) {
    cateModule.delCateById(req.query.id, err => {
      if (err) {
        console.log(err);
        res.json({
          code: 201,
          msg: "服务器异常，请重试"
        });
      } else {
        res.json({
          code: 200,
          msg: "删除成功"
        });
      }
    });
  },

  cateDels(req, res) {
    var ids = req.query.id;
    cateModule.cateDels(ids, err => {
      if (err) {
        console.log(err);
        res.json({
          code: 201,
          msg: "服务器异常，请重试"
        });
      } else {
        res.json({
          code: 200,
          msg: "删除成功"
        });
      }
    });
  }
};
