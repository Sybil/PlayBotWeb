import Ember from 'ember';

var FiltersmenuController = Ember.Controller.extend({
  needs: 'tracks',
  date: Ember.computed.alias('controllers.tracks.date'),
});

export default FiltersmenuController;
