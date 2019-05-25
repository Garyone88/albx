$(function() {
  // 获取数据渲染分类；
  (function() {
    $.ajax({
      type: "get",
      url: "/getAllCate",
      dataType: "json",
      success: function(response) {
        var htmlStr = "";
        for (var i = 0; i < response.data.length; i++) {
          htmlStr += `<option value=${response.data[i].id}>${
            response.data[i].name
          }</option>`;
        }
        $("#category").html(htmlStr);
      }
    });
  })();

  // 上传文件；
  $("#feature").on("change", function() {
    var myfile = document.querySelector("#feature").files[0];
    var formData = new FormData();
    formData.append("img", myfile);
    $.ajax({
      type: "post",
      url: "/uploadFile",
      data: formData,
      processData: false,
      contentType: false,
      dataType: "json",
      success: function(response) {
        if (response.code == 200) {
          $(".thumbnail")
            .attr("src", "/uploads/" + response.img)
            .show();
          $(".featureimg").val("/uploads/" + response.img); // 存储上传图片的路径到隐藏域；
        }
      }
    });
  });

  // 富文本框设置；
  CKEDITOR.replace("content");


  // 上传表单；
  $(".btn-opt").on("click", function() {
    CKEDITOR.instances.content.updateElement();
       opt(url)
  });

//  添加或编辑文章；
  function opt(url){
    $.ajax({
      type: "post",
      url: url,
      data: $("form").serialize(),
      dataType: "json",
      success: function(res) {
        if (res.code == 201) {
          $(".alert-opt")
            .fadeIn(500)
            .delay(2000)
            .fadeOut(500);
          $(".alert-opt > span").text(res.msg);
        } else if (res.code == 200) {
          $(".alert-opt")
            .fadeIn(500)
            .delay(2000)
            .fadeOut(500);
          $(".alert-opt > span").text(res.msg);
          setTimeout(function() {
            location.href = "/admin/posts";
          }, 3000);
        }
      }
    });
  }
  // 获取地址栏Id；
 
    var id = itcast.getId(location.search).id;
    if(id){
    // 通过是否有id  判断是添加文章还是编辑文章；
      var url = '/editPostById'

      $('h1').text('编辑文章')
      $('.btn-opt').val('编辑完成')
      $.ajax({
        type: "get",
        url: "/getPostById",
        // data:{id:id},
        data:{id},
        dataType: "json",
        success: function (response) {
          $('#title').val(response.data.title)
          $('#content').val(response.data.content)
          $('#slug').val(response.data.slug)
          $('.thumbnail').attr('src',response.data.feature).show()
          $('.featureimg').val(response.data.feature)   // 获取回来的原有路径存到隐藏域中；
          $('#id').val(response.data.id)   // 把id存到隐藏域中；
          $('#category').val(response.data.category_id)
          $('#created').val(response.data.created)
          $('#status').val(response.data.status)
        }
      });
    }else{
      url = '/postAdd'
    }

});
