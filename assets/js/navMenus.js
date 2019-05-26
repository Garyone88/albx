$(function() {
  $(".btn-add").on("click", function() {
    $.ajax({
      type: "post",
      url: "/addNavMenus",
      data: $("form").serialize(),
      dataType: "json",
      success: function(res) {
        if (res.code == 201) {
          $(".alert-danger")
            .fadeIn(500)
            .delay(2000)
            .fadeOut(500);
          $(".alert-danger > span").text(res.msg);
        } else if (res.code == 200) {
            $(".alert-danger")
              .fadeIn(500)
              .delay(2000)
              .fadeOut(500);
            $(".alert-danger > span").text(res.msg);
          }
      }
    });
  });
});
