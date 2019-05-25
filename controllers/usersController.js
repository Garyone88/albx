const usersModule = require('../modules/usersModule')

module.exports = {
    login(req,res){
        var email = req.body.email;
        var password = req.body.password;
        usersModule.getUserByEmail(email,(err,data)=>{
            if(err){
                console.log(err);
                res.json({
                    code:'201',
                    msg:'服务器异常，请重试'
                })
            }else{
                //有邮箱数据，再去验证密码是否正确；
                if(data){
                    // 登录成功；
                    if(password == data.password){
                        // cookie写法
                        // res.writeHead(200,{
                        //     "Content-Txet":'text/html;charset=utf-8',
                        //     "Set-Cookie":'isLogin=true'
                        // })
                        // session写法
                        req.session.isLogin='true'
                        req.session.currentUser = data
                        res.end(JSON.stringify({
                            code:'200',
                            msg:'登录成功'
                        }))
                    }else{
                        res.json({
                            code:'201',
                            msg:'密码错误，请重新输入'
                        })
                    }
                }
                //无邮箱数据；
                else{
                    res.json({
                        code:'201',
                        msg:'邮箱信息错误，请重新输入'
                    })
                }
            }
            
            
        })
    }
}