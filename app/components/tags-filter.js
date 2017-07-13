import Ember from 'ember';

export default Ember.Component.extend({
  sortProperties: ['quantity'],
  sortAscending: true,

  actions: {
    chooseTag(tag) {
      this.set('tagSelected', tag);
    }
  }
});
