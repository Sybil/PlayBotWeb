import Ember from 'ember';

var ChannelsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('channel');
  }
});

export default ChannelsRoute;
