import Ember from 'ember';

var NavigationController = Ember.Controller.extend({
  actions: {
    menu: function() {
      $('.menu-button, .menu, .fade-menu').toggleClass('is-visible');
    }
  }
});

export default NavigationController;
