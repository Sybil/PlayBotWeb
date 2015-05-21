import Ember from 'ember';

var TracksRoute = Ember.Route.extend({
  activate: function() {
    this.render('design', {outlet: 'design'});
  },

  queryParams: {
    tag: { refreshModel: true },
    channel: { refreshModel: true },
    user: { refreshModel: true }, 
    date: { refreshModel: true }, 
    page: { refreshModel: true }
  },

  model: function(params) {
    var query = {};
    if(Ember.isPresent(params.page)) {
      query.page = params.page;
    }
    if (Ember.isPresent(params.tag)) {
      query.tag = params.tag;
    }
    if (Ember.isPresent(params.channel)) {
      query.channel = params.channel;
    }
    if (Ember.isPresent(params.user)) {
      query.user = params.user;
    }
    if (Ember.isPresent(params.date)) {
      query.date = params.date;
    }
    return Ember.RSVP.hash({
      tags: this.store.find('tag'),
      channels: this.store.find('channel'),
      users: this.store.find('user'),
      tracks: this.store.find('track', query)
    });
  },

  setupController: function(controller, model) {
    this._super.apply(this, arguments);
    controller.set('totalPages', model.tracks.get('meta.total_pages'));
  }

});

export default TracksRoute;
