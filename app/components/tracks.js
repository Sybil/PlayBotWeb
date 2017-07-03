import Ember from "ember";

export default Ember.Component.extend({
  didInsertElement: function() {
    $('.datefilter').dateDropper({format: "Y-m-d", animation: "dropdown", color: "#2098d1", textColor: "#333000"});
    $('.datefilter').prop('readonly',false);
  }
});

