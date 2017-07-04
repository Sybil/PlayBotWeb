import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['quantity'],
  sortAscending: true,

  needs: 'tracks',
  userSelected: Ember.computed.alias('controllers.tracks.user'),

  actions: {
    chooseUser(user) {
      this.set('userSelected', user);
    }
  }

});
