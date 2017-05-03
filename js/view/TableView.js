define([
    'js/view/RowView',
    'text!template/table.html',
], function (RowView, view_template) {
    /* _.templateSettings={
     interpolate:/\{\{(.+?)\}\}/g
     };*/  //设置模板的的配置项,可以将默认的<%= %>设置为{{}}
    return Backbone.View.extend({

        template: _.template(view_template),

        events: {
            "click button.delete": "delete",
            "click button.firstDelete": "firstDelete",
            "click button.lastDelete": "lastDelete",
            "click button.sort": "sort",
            "dblclick td": "edit",
            'blur input': 'blur'

        },
        render: function () {
            //this.$el.html(this.template());
            $(this.el).html(this.template());
            $tbody = $('tbody', this.$el.find('.info'));
            this.collection.forEach(function (model) {
                var rowView = new RowView({
                    model: model
                });
                $tbody.append(rowView.render().el);
            }, this);
            return this;
        },
        delete: function (ev) {
            var me = this;
            var id = $(ev.currentTarget).attr('name');
            this.collection.forEach(function (model) {
                if (model.get('id') == id) {
                    model.destroy({
                        success: function (model) {
                            console.log("删除成功" + model.toJSON());
                        },
                        error: function (err) {
                            console.log(err);
                        },
                        wait: true//发送 delete请求，并对数据进行验证，当请求数据错误时，不会触发destroy函数执行
                    });
                    me.render();
                }
            });
        },
        firstDelete: function () {
            if (this.collection.length > 0) {
                this.collection.shift();
                this.render();
            } else {
                alert("没有数据了");
            }
        },
        lastDelete: function () {
            if (this.collection.length > 0) {
                this.collection.pop();
                this.render();
            } else {
                alert("没有数据了");
            }
        },
        sort: function () {
            if (this.collection.length > 0) {
                this.collection.sort();
                this.render();
            } else {
                alert("没有数据，无法进行排序");
            }
        },
        edit: function (ev) {
            var me = this;
            var $ev = $(ev.currentTarget);
            $ev.text('');
            var input = '<input type="text"> ';
            $ev.append(input);

        },
        blur: function (ev) {
            var newValue = $(this.el).find("input").val();
            var id = $(this.el).find("input").attr("name");
            $(this.el).find("input").remove();
            this.render();
        }
    });
});