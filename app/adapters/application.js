import Ember from 'ember';
import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  host: 'http://localhost:3000'
});

Ember.LinkComponent.reopen({
  attributeBindings: ['data-trackid', 'style']//,'title']
});
