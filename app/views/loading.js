import Ember from 'ember';

var LoadingView = Ember.View.extend({
  didInsertElement: function() {
        var target = document.getElementsByClassName('loader');
        new Spinner().spin(target[0]);
  }
});

export default LoadingView;
