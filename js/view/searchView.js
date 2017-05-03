/**
 * Created by like on 2016/8/16.
 */
define(['text!template/search.html'], function (search_template) {
    return Backbone.View.extend({
        template:_.template(search_template),
        events:{
            "click button#back":"backToHome"
        },
        render: function () {
            this.$el.html(this.template());
            return this;
        },
        backToHome: function () {
            navigator('');
        }
    });
});