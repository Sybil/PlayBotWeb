import Ember from "ember";

export default Ember.Component.extend({
  didInsertElement: function() {
    var target = document.getElementsByClassName('loader');
    new Spinner().spin(target[0]);
  }
});


