define(function () {
  return Backbone.Model.extend({
    defaults: {
      id: null,
      first_name: '',
      last_name: '',
        score:0
    },

    localStorage: new Backbone.LocalStorage('demo'),

    validate: function(attrs) {
      if (attrs.first_name === '') {
        return "'first_name' cannot be empty";
      }
      if (attrs.last_name === '') {
        return "'last_name' cannot be empty";
      }
        if (attrs.score === '') {
            return "'score' cannot be empty";
        }
    }
  });
});