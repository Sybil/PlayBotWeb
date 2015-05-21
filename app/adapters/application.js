import DS from 'ember-data';
import Ember from 'ember';

var ApplicationAdapter = DS.ActiveModelAdapter.extend({
  host: 'https://api-playbot.skizzk.fr'
});

//App = Ember.Application.create({
//  LOG_TRANSITIONS: true,
//  LOG_TRANSITIONS_INTERNAL: true,
//  LOG_VIEW_LOOKUPS: true,
//  LOG_ACTIVE_GENERATION: true,
//  LOG_BINDINGS: true
//});
Ember.LinkView.reopen({
    attributeBindings: ['data-trackid', 'style']//,'title']
});

export default ApplicationAdapter;
