import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['quantity'],
  sortAscending: true,

  needs: 'tracks',
  tagSelected: Ember.computed.alias('controllers.tracks.tag'),

  actions: {
    chooseTag(tag) {
      this.set('tagSelected', tag);
    }
  }
});
