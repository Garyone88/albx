const querystring = require('querystring')

// 前台页面；
exports.getIndexPage = (req,res)=>{
    res.render('index')
}
exports.getListPage = (req,res)=>{
    res.render('list')
}
exports.getDetailPage = (req,res)=>{
    res.render('detail')
}

// 后台页面；
exports.getAdminIndexPage = (req,res)=>{
    // cookie写法
    // var cook = querystring.parse(req.headers.cookie);
    // if(cook.isLogin && cook.isLogin=='true'){
    //     res.render('admin/index')
    // }
    // session写法
    // if(req.session.isLogin && req.session.isLogin=='true'){
    //     res.render('admin/index')
    // }else{
    //     res.redirect('/admin/login')
    // }
    res.render('admin/index')
}
exports.getCategoriesPage = (req,res)=>{
    res.render('admin/categories')
}
exports.getCommentsPage = (req,res)=>{
    res.render('admin/comments')
}
exports.getLoginPage = (req,res)=>{
    res.render('admin/login')
}
exports.getNavMenusPage = (req,res)=>{
    res.render('admin/nav-menus')
}
exports.getPasswordResetPage = (req,res)=>{
    res.render('admin/password-reset')
}
exports.getPostAddPage = (req,res)=>{
    res.render('admin/post-add')
}
exports.getPostsPage = (req,res)=>{
    res.render('admin/posts')
}
exports.getProfilePage = (req,res)=>{
    res.render('admin/profile')
}
exports.getSettingsPage = (req,res)=>{
    res.render('admin/settings')
}
exports.getSlidesPage = (req,res)=>{
    res.render('admin/slides')
}
exports.getUsersPage = (req,res)=>{
    res.render('admin/users')
}
