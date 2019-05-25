$(function() {
  function init() {
    $.ajax({
      type: "get",
      url: "/getAllCate",
      dataType: "json",
      success: function(res) {
        if (res.code == 200) {
          var htmlStr = template("cateTempList", res);
          $("tbody").html(htmlStr);
        }
      }
    });
  }
  init();
  //  1 添加、编辑；

  function opt(url) {
    $.ajax({
      type: "post",
      url: url,
      data: $("form").serialize(),
      dataType: "json",
      success: function(res) {
        if (res.code == 201) {
          $(".alert-add")
            .fadeIn(500)
            .delay(2000)
            .fadeOut(500);
          $(".alert-add > span").text(res.msg);
        } else if (res.code == 200) {
          $(".alert-add")
            .fadeIn(500)
            .delay(2000)
            .fadeOut(500);
          $(".alert-add > span").text(res.msg);
          init();
          $("#name").val("");
          $("#slug").val("");
        }
      }
    });
  }
  $(".btn-add").on("click", function() {
    if ($(".btn-save").text() == "保存") {
      var url = "/cateEdit";
    } else {
      var url = "/cateAdd";
    }
    opt(url);
    $(".btn-save").text("添加");
  });

  // 2 编辑；
  $("tbody").on("click", ".btn-edit", function() {
    $(".btn-save").text("保存");
    $("#name").val($(this).data("name"));
    $("#slug").val($(this).data("slug"));
    $("#id").val($(this).data("id"));
  });

  // 3 通过id删除；
  $("tbody").on("click", ".btn-del", function() {
    var id = $(this).data("id");
    $.ajax({
      type: "get",
      url: "/delCateById",
      data: { id: id },
      dataType: "json",
      success: function(res) {
        if (res.code == 201) {
          $(".alert-del")
            .fadeIn(500)
            .delay(2000)
            .fadeOut(500);
          $(".alert-del > span").text(res.msg);
        } else if (res.code == 200) {
          $(".alert-del")
            .fadeIn(500)
            .delay(2000)
            .fadeOut(500);
          $(".alert-del > span").text(res.msg);
          init();
        }
      }
    });
  });

  // 4 批量删除；

  //  4.1 全选按钮；
  $(".chkAll").on("click", function() {
    var value = $(this).prop("checked");
    $(".chkOne").prop("checked", value);
    if (value) {
      $(".btn-dels").fadeIn(500);
    } else {
      $(".btn-dels").fadeOut(500);
    }
  });
  //  4.2 单选按钮；
  $("tbody").on("click", ".chkOne", function() {
    var num = $(".chkOne:checked").length;
    if (num > 1) {
      $(".btn-dels").fadeIn(500);
    } else {
      $(".btn-dels").fadeOut(500);
    }

    if (num == $(".chkOne").length) {
      $(".chkAll").prop("checked", true);
    } else {
      $(".chkAll").prop("checked", false);
    }
  });

  // 4.3 批量删除按钮；
  $(".btn-dels").on("click", function() {
    var chk = $(".chkOne:checked");
    var arrIds = [];
    for (var i = 0; i < chk.length; i++) {
      arrIds.push($(chk[i]).data("id"));
    }
    $.ajax({
      type: "get",
      url: "/cateDels",
      data: { id: arrIds.join(",") },
      dataType: "json",
      success: function(res) {
        if (res.code == 201) {
          $(".alert-del")
            .fadeIn(500)
            .delay(2000)
            .fadeOut(500);
          $(".alert-del > span").text(res.msg);
        } else if (res.code == 200) {
          $(".alert-del")
            .fadeIn(500)
            .delay(2000)
            .fadeOut(500);
          $(".alert-del > span").text(res.msg);
          init();
        }
      }
    });
  });
});
