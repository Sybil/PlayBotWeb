import DS from 'ember-data';
import Ember from 'ember';

export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:3000'
});

Ember.LinkComponent.reopen({
  attributeBindings: ['data-trackid', 'style']//,'title']
});
