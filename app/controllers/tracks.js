import Ember from 'ember';

var TracksController = Ember.Controller.extend({
  sortProperties: ['quantity'],
  sortAscending: true,
  queryParams: ['tag','user','channel','date','page','design'],
  tag: null,
  date: '',
  page: 1,
  channel: null,
  user: null,
  totalPages: 1,
  design: 'table',

  resetPage: function() {
    return this.set('page', 1);
  }.observes('tag','channel', 'user', 'date'),

  colorGridDesign: function() {
    return this.get('design') === 'colorGrid';
  }.property('design'),

  tableDesign: function() {
    return this.get('design') === 'table';
  }.property('design'),

  cassetteDesign: function() {
    return this.get('design') === 'cassette';
  }.property('design'),

  //changeDesign: function() {
    //reset cassette player informations
    //player = null;
  //}.observes('design'),

  prevPage: function() {
    return this.get('page') - 1;
  }.property('page'),

  nextPage: function() {
    return this.get('page') + 1;
  }.property('page'),

  notFirstPage: function() {
    return this.get('page') !== 1;
  }.property('page'),
  
  notSecondPage: function() {
    return this.get('page') !== 2;
  }.property('page'),

  notLastPage: function() {
    return (this.get('page') < this.get('totalPages'));
  }.property('page', 'totalPages'),

  pagesRange: function () {
    var pagesList = Ember.A();
    var minPage = Math.max(1, this.get('page') - 2);
    var maxPage = Math.min(this.get('page') + 2, this.get('totalPages'));
    for(var i = minPage; i <= maxPage; i++) {
      pagesList.push(i);
    }
    return pagesList;
  }.property('page','totalPages'),

  currentPage: function() {
    return this.get('page');
  }.property('page'),
});

export default TracksController;
