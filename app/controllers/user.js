import Ember from 'ember';

var UserController = Ember.Controller.extend({
  weight: function() {
    return Math.sqrt(this.get('model.quantity'));
  }.property('quantity'),

  category: function() {
     if (this.get('weight') < 3) {
       return 'user hided';
     }
     else {
       return 'user';
    }
  }.property('quantity'),

  info: function() {
    return this.get('model.name')+" - "+this.get('model.quantity')+" tracks";
  }.property('name'),

  style: function() {
    return ('width:'+this.get('weight')+'vw').htmlSafe();
  }.property('quantity')
});

export default UserController;
