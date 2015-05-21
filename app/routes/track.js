import Ember from 'ember';

var TrackRoute = Ember.Route.extend({
  actions: {
    didTransition: function() {
      Ember.run.scheduleOnce('afterRender', this, function() {
        var track = this.modelFor('track');
        play(track);
      });
    }
  }
});

export default TrackRoute;
