import Ember from 'ember';

//ChannelsController = Ember.ArrayController.extend({
//  itemController: ['channel']
//});

var ChannelController = Ember.ObjectController.extend({
  weight: function() {
    return Math.sqrt(this.get('model.quantity'));
  }.property('quantity'),

  info: function() {
    return this.get('model.name')+" - "+this.get('model.quantity')+" tracks";
  }.property('name'),

  style: function() {
    return ('width:'+this.get('weight')+'vw').htmlSafe();
  }.property('quantity'),
 
  category: function() {
     if (this.get('weight') < 3) {
      return 'channel hided';
     }
     return 'channel';
  }.property('quantity')
});

export default ChannelController;
