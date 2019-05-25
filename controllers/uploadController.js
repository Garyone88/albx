const formidable = require('formidable');
const path = require('path');

module.exports = {
    uploadFile(req,res){
        var form = new formidable.IncomingForm()
        form.encoding = 'utf-8';
        form.uploadDir = __dirname + '/../uploads';
        form.keepExtensions = true;
        form.parse(req,function(err,fields,files){           
            if(err){
                res.json({
                    code:201,
                    msg:'文件上传失败'
                })
            }else{
                res.json({
                    code:200,
                    msg:'文件上传成功',
                    // basename:可以获取 路径中最后一个/后面的内容
                    img:path.basename(files.img.path)
                })
            }
        })
    }
};
