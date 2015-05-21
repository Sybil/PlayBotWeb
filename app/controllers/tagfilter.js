import Ember from 'ember';

var TagfilterController = Ember.ArrayController.extend({
  //sortProperties: ['quantity:desc'],
  //sortedModel: Ember.computed.sort("model", "sortProperties"),

  needs: 'tracks',
  tagSelected: Ember.computed.alias('controllers.tracks.tag'),

});

export default TagfilterController;
