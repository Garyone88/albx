$(function () {
    var pathname = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
    // console.log(pathname);
    if (pathname == 'posts' || pathname == 'post-add' || pathname == 'categories') {
        $('#menu-posts').addClass('in').attr('aria-expanded', 'true');
    } else if (pathname == 'nav-menus' || pathname == 'slides' || pathname == 'settings') {
        $('#menu-settings').addClass('in').attr('aria-expanded', 'true');
    }
    $('#'+pathname).addClass('active');
    // var routername;
    // var index = location.href.indexOf('?');
    // if(index != -1){
    //     routername = location.href.substring(location.href.lastIndexOf('/')+1,index);
    // }else{
    //     routername = location.href.substring(location.href.lastIndexOf('/')+1);
    // }
    // if(routername=='posts' || routername=='post-add' || routername == 'categories'){
    //     $('#menu-posts').addClass('in').attr('aria-expanded','true');

    // }
})