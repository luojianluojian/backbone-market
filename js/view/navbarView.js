/**
 * Created by like on 2016/8/16.
 */
define([ 'text!template/navbar.html','js/view/ContentView'], function (navbar_template,ContentView) {
    return Backbone.View.extend({
        template: _.template(navbar_template),
        render: function () {
            this.$el.html(this.template());
            var contentView = new ContentView();
            this.$el.find("#ADContainer").html(contentView.render().el);
            return this;
        }
    });
});