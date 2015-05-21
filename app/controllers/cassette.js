import Ember from 'ember';

var CassetteController = Ember.Controller.extend({
  n: 0,
  needs: 'tracks',
  totalPages: Ember.computed.alias('controllers.tracks.totalPages'),
  page: Ember.computed.alias('controllers.tracks.page'),

  init: function() {
    player=null;
  },

  randomCassette: function() {
    var newPage = Math.floor(Math.random() * (this.get('totalPages') -1)) + 1;
    if (newPage === this.get('page')) {
      this.set('n', Math.floor(Math.random() * this.model.tracks.content.length));
      this.play();
    }
    else {
      this.set('page', newPage);
    }
  },

  track: function() { 
    return this.model.tracks.content[this.get('n')];
  }.property('model','n'),


  play: function() {
    var track = this.model.tracks.content[this.get('n')];
    play_cassette(track);
  },

  modelChange: function() {
    stopWheels();
    wheels= null;
    player = null;
    Ember.$('iframe').replaceWith("<iframe id='iframe' class='cassette'></iframe>");
    Ember.run.once(this, function() {
      this.set('n', Math.floor(Math.random() * this.model.tracks.content.length));
      this.play();
    });
  }.observes('model'),

  next: function() {
    stopWheels();
    wheels= null;
    player = null;
    Ember.$('iframe').replaceWith("<iframe id='iframe' class='cassette'></iframe>");
    this.randomCassette();
  },

  actions: {
    playButton: function() {
      this.play();
    },
    stopButton: function() {
      var track = this.model.tracks.content[this.get('n')];
      stop_cassette(track);
    },
    nextButton: function() {
      this.next();
    },
  }
});

export default CassetteController;
