import Ember from 'ember';

var TracksView = Ember.View.extend({
  didInsertElement: function() {
    $('.datefilter').dateDropper({format: "Y-m-d", animation: "dropdown", color: "#2098d1", textColor: "#333000"});
    $('.datefilter').prop('readonly',false);
  }
});

export default TracksView;
