define([
    'js/model/User',
    'js/model/Users',
    'js/view/TableView',
    'js/view/FormView',
    'js/view/navbarView',
    'js/view/searchView',
    'js/view/MenuView',
], function (User, Users, TableView, FormView,navbarView,SearchView,MenuView) {
    return Backbone.Router.extend({
        users: null,
        initialize: function () {
            this.users = new Users();
            this.users.fetch();
        },
        routes: {
            '': 'list',
            'search': 'search',
            'edit/:id': 'editUser',
            'menu':'menu'
        },

        list: function () {
            var navView = new navbarView({ });
            $('#container').empty().append(navView.render().el);
        },
        search: function () {
            var searchView = new SearchView({ });
            $('#container').empty().append(searchView.render().el);
        },
        menu: function () {
          var menuView = new MenuView({});
          $('#container').empty().append(menuView.render().el);
        },
        newUser: function () {
            var user = new User({
                first_name: '',
                last_name: ''
            });
            var formView = new FormView({
                model: user,
                collection: this.users
            });
            formView.on('done', function () {
                this.users.add(user);
                this.navigate('', {trigger: true});//改变URL,使url后面的参数为空,跳到主页
            }, this);
            $('#container').empty().append(formView.render().el);
        },

        editUser: function (id) {
            var user = this.users.get(id);
            var formView = new FormView({
                model: user,
                collection: this.users
            });
            formView.on('done', function () {
                this.navigate('', {trigger: true});
            }, this);
            $('#container').empty().append(formView.render().el);
        }
    });
});