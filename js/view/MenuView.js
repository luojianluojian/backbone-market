/**
 * Created by like on 2016/8/31.
 */
define(['plugins/waterFall','text!template/Menu.html'], function (waterFall,template) {
    return Backbone.View.extend({
        template: _.template(template),
        events:{},
        render: function () {
            var imagesPath = './images/myImages/';
            var imagesArr=[];
            var data = {'data':[]};
            for(var i= 0,len=97;i<97;i++){
                //imagesArr.push();
                data.data.push({'src':imagesPath+i+".jpg"});
            }

          $(this.el).html(this.template());
          $(this.el).find("#myImages").empty().append(html);
            return this ;
        },
        waterFlow: function () {



        }
    });
});