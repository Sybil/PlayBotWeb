import Ember from 'ember';

var TagfilterController = Ember.ArrayController.extend({
  sortProperties: ['quantity'],
  sortAscending: true,

  needs: 'tracks',
  tagSelected: Ember.computed.alias('controllers.tracks.tag'),

});

export default TagfilterController;
