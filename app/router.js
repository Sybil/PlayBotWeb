import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {path: '/'});
  this.route('users');
  this.resource('channels');
  this.route('about');

  this.resource('tracks', function() {
    this.resource('track', {path: '/:track_id'});
  });
});

export default Router;
