import DS from "ember-data";

export default DS.Model.extend({
  name: DS.attr('string'),
  url: DS.attr('string'),
  author: DS.attr('string'),
  channel: DS.attr('string'),
  provider: DS.attr('string'),

  tags: DS.hasMany('tag', {async: false})
});
