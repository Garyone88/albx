$(function() {
    var currentPage  = 1; // 初始当前页；
    var pageSize = 2;   // 每页显示的数量；
  function init(query) {
    $.ajax({
      type: "get",
      url: "/getAllposts",
      data:{
        page: currentPage,
        pageSize: pageSize,
        ...query
      },
      dataType: "json",
      success: function(response) {
        if (response.code == 200) {
          // console.log(response);
          var htmlStr = template("postsTempList", response.data);
          $("tbody").html(htmlStr);
          setPage(currentPage, Math.ceil(response.data.total/pageSize) , init);
        }
      }
    });
  }
  // 动态渲染数据；
  init();

  // 分页；
  function setPage(pageCurrent, pageSum,callback) {
    $(".pagination").bootstrapPaginator({
      //设置版本号
      bootstrapMajorVersion: 3,
      // 显示第几页
      currentPage: pageCurrent,
      // 总页数
      totalPages: pageSum,
      //当单击操作按钮的时候, 执行该函数, 调用ajax渲染页面
      onPageClicked: function(event, originalEvent, type, page) {
        // 把当前点击的页码赋值给currentPage, 调用ajax,渲染页面
        currentPage = page;
        callback && callback();
      }
    });
    
  }

  // 渲染分类以及状态；
  (function(){
    $.ajax({
      type: "get",
      url: "/getAllCate",
      dataType: "json",
      success: function (response) {
        var cateStr = '<option value="all">所有分类</option>';
        for(var i=0;i<response.data.length;i++){
          cateStr +=`<option value=${response.data[i].id}>${response.data[i].name}</option>`
        }
        $('.cateSelector').html(cateStr)
      }
    });
  })()

  // 筛选按钮；
  $('.btn-filter').on('click',function(){
    var query = {};
    var category_id = $('.cateSelector').val();
    var status = $('.statuSelector').val();
    if (category_id!='all'){
      query.category_id = category_id
    }
    if (status!='all'){
      query.status = status;
    }
    init(query);
  })
});
