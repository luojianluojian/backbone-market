/**
 * Created by like on 2016/8/16.
 */
define(['text!template/content.html'], function (content_template) {
    return Backbone.View.extend({
        template: _.template(content_template),
        render: function () {
            myFocus.set({
                id: "picBox"
            });
            this.$el.html(this.template());
            return this;
        }
    });
})