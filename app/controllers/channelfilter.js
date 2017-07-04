import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['quantity'],
  sortAscending: true,

  needs: 'tracks',
  channelSelected: Ember.computed.alias('controllers.tracks.channel'),

  actions: {
    chooseChannel(channel) {
      this.set('channelSelected', channel);
    }
  }
});
