const express = require('express');
var router = express.Router();
const pagesController = require('./controllers/pagesController')
const usersController = require('./controllers/usersController')
const categoriesController = require('./controllers/categoriesController');
const postsController = require('./controllers/postsController');
const uploadController = require('./controllers/uploadController');

router.get('/',pagesController.getIndexPage)
.get('/list',pagesController.getListPage)
.get('/detail',pagesController.getDetailPage)

// 后台页面；
.get('/admin',pagesController.getAdminIndexPage)
.get('/admin/categories',pagesController.getCategoriesPage)
.get('/admin/comments',pagesController.getCommentsPage)
.get('/admin/login',pagesController.getLoginPage)
.get('/admin/nav-menus',pagesController.getNavMenusPage)
.get('/admin/password-reset',pagesController.getPasswordResetPage)
.get('/admin/post-add',pagesController.getPostAddPage)
.get('/admin/posts',pagesController.getPostsPage)
.get('/admin/profile',pagesController.getProfilePage)
.get('/admin/settings',pagesController.getSettingsPage)
.get('/admin/slides',pagesController.getSlidesPage)
.get('/admin/users',pagesController.getUsersPage)

// 登录用户；
.post('/login',usersController.login)

// 分类页面；
.get('/getAllCate',categoriesController.getAllCate)
.post('/cateAdd',categoriesController.cateAdd)
.get('/delCateById',categoriesController.delCateById)
.get('/cateDels',categoriesController.cateDels)
.post('/cateEdit',categoriesController.cateEdit)

// posts页面；
.get('/getAllposts',postsController.getAllposts)
.post('/postAdd',postsController.postAdd)
.get('/getPostById',postsController.getPostById)
.post('/editPostById',postsController.editPostById)


// 上传文件；
.post('/uploadFile',uploadController.uploadFile)
module.exports = router;