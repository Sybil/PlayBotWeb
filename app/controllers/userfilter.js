import Ember from 'ember';

var UserfilterController = Ember.Controller.extend({
  sortProperties: ['quantity'],
  sortAscending: true,

  needs: 'tracks',
  userSelected: Ember.computed.alias('controllers.tracks.user'),
});

export default UserfilterController;
