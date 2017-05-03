define([
    'js/model/User'
], function (User) {
    return Backbone.Collection.extend({
        model: User,
        localStorage: new Backbone.LocalStorage('demo'),
        comparator: function (model_1, model_2) {
            var intComp = model_1.get('score') > model_2.get('score');
            return intComp ? 0 : 1;
        }
    });
});