app.Router = Backbone.Router.extend({
  routes: {
    'time/:id': 'time'
  },

  time: function(id) {
    app.Event.trigger(app.Event.TaskStart, this.manager.mainCollection.get(id));
  },

  goTo: function(path) {
    location.href = path;
  },

  initialize: function() {
    var router = this;
    this.manager = new app.Manager();
    app.Event.on(app.Event.TaskStop, function() {
      router.goTo('/#');
    });
  }
});