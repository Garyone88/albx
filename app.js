const express = require('express')
const router = require('./router')
const bodyParser = require('body-parser')
const session = require('express-session')

var app = express();
app.listen(3000,()=>{
    console.log('this server is running at http://127.0.0.1:3000');
})
app.set('view engine','ejs')
app.use('/assets',express.static('assets'))
app.use('/uploads',express.static('uploads'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(session({
    secret:'circle',
    resave:false,
    saveUninitialized:false
}))
app.use((req,res,next)=>{
    if(req.session.isLogin && req.session.isLogin=='true' || req.url == '/admin/login' || req.url.lastIndexOf('/admin') == -1){
        next()
    }else{
        res.redirect('/admin/login')
    }
})
app.use(router)