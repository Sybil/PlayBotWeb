import Ember from 'ember';

var ChannelfilterController = Ember.Controller.extend({
  needs: 'tracks',
  channelSelected: Ember.computed.alias('controllers.tracks.channel'),
});

export default ChannelfilterController;
