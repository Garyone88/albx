const optionsModule = require('../modules/optionsModule');

module.exports = {
    addNavMenus(req,res){
        req.body.icon = 'fa fa-glass'
        optionsModule.addNavMenus(req.body,(err,data)=>{
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
    }
};
