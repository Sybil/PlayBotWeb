import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('channels', { path: '/channels' });
  this.route('users', { path: '/users' });
  this.route('track', { path: '/track/:track_id' });
  this.route('tracks', { path: '/tracks' });
});

export default Router;
