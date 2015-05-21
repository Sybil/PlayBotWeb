import Ember from 'ember';

var ApplicationView = Ember.View.extend({
  willInsertElement: function() {
    $('body').removeClass('preload');
  }
});

export default ApplicationView;
