import Ember from 'ember';

var ChannelfilterController = Ember.Controller.extend({
  sortProperties: ['quantity'],
  sortAscending: true,

  needs: 'tracks',
  channelSelected: Ember.computed.alias('controllers.tracks.channel'),
});

export default ChannelfilterController;
