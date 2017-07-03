import Ember from "ember";

export default Ember.Component.extend({
  didInsertElement: function() {
    $(window).load(function() {
      $('body').removeClass('preload');
    });
  }
});

