import Ember from 'ember';

var ApplicationView = Ember.View.extend({
  didInsertElement: function() {
    $('body').removeClass('preload');
  }
});

export default ApplicationView;
