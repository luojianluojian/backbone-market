/**
 * Created by like on 2016/8/17.
 */
var createXhrObject = function () {
    var methods =
        [function () {
            return new XMLHttpRequest();
        }, function () {
            return new ActiveXObject("Msxml2.XMLHTTP");
        }, function () {
            return new ActiveXObject("Microsoft.XMLHTTP");
        }];

    for (var i = 0, len = methods.length; i < len; i++) {
        try {
            methods[i].call(this, null);
        }
        catch (e) {
            continue;
        }
        this.createXhr = methods[i];
        return  methods[i];
    }
};
var simpleHandler = function () {
};
simpleHandler.prototype = {
    constructor: simpleHandler,
    request: function (method, url, callback, postVal) {
        var xhr = this.createXhrObject();
        xhr.onreadystatechange = function () {
            if(xhr.readyState!==4){
                return ;
            }
            if(xhr.status===200){
                callback.success(xhr.responseText,xhr.responseXML);
                callback.fail(xhr.status);
            }
            xhr.open(method,url,true);
            if(method.toLowerCase()!=='POST'){
                postVal = null;
            }
            xhr.send(postVal);
        }
    }
};
var myHandler = new simpleHandler();
var callcack = {
    success: function (responseText,responseXML) {
        console.log(responseText,responseXML);
    },
    fail: function (status) {
        console.log(status);
    }
}
myHandler.request(method,url,callcack,postVal);

