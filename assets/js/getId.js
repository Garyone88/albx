var itcast = {
  getId(str) {
    var obj = {};
    str = str.substring(1);
    // id=23&age=18;
    var arr = str.split("&");
    for (var i = 0; i < arr.length; i++) {
      var temp = arr[i].split("=");
      obj[temp[0]] = temp[1];
    }
    return obj;
  }
};
