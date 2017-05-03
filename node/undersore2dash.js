/**
 * Created by like on 2016/9/21.
 */
var fs = require("fs");
//fs.readdir(path, callback)
var path = './images/phone';
fs.readdir(path, function (err, files) {

        for(var i = 0,len = files.length;i<len;i++){
           var  fileName = files[i];
            var oldName = path+"/"+fileName, newName = "phone_"+path+'/'+fileName;
            //fs.rename(oldPath, newPath, callback)
            fs.rename(oldName,newName, function (err) {
                if(!err){
                    console.log(oldName + '替换成功!');
                }
            });
        }
});