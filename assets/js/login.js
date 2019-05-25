$(function () {
    $('.btn-primary').on('click', function () {
        var isEmail = /\w+[@]\w+[.]\w+/.test($('#email').val())
        if (!isEmail) {
            $('.alert-danger').fadeIn(500).delay(2000).fadeOut(500);
            $('.alert-danger > span').text('邮箱格式错误！');
            return;
        }
        
            $.ajax({
                type: 'post',
                url: '/login',
                data: $('.login-wrap').serialize(),
                dataType: 'json',
                success: function (res) {
                    if (res.code == 201) {
                        $('.alert-danger').fadeIn(500).delay(2000).fadeOut(500);
                        $('.alert-danger > span').text(res.msg);
                    }else if(res.code == 200){
                        location.href='/admin'
                    }
                }
            })
        })
    })