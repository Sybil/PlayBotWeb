var wheels;
var player = null;
var trackLength;
var timeElapsed;
// Cassette player --------------------
function next_cassette() {
  $(".vc-control-switch").click();
  //__container__.lookup('controller:cassette').next(); 
  //inject('controller', 'cassette', 'cassette:next');
  //this.container.lookup("").format(date);
  //CassetteController.send('next');
  //this.get('controllers.cassette').send('next');
}
function play_cassette(track) {
  $('.vc-control-play').addClass('vc-control-active');
  if ( track.get('provider') == "youtube") {
    youtube_cassette(track);
  }
  else if ( track.get('provider') == "soundcloud" ){
    soundcloud_cassette(track);
  }
  else {
    next_cassette();
  }
  //$('.tape-name').html(track.get('name'));
  startWheels(track);
}
function onCassetteEnding(event) {
  if (event.data == YT.PlayerState.ENDED) {
    next_cassette();
  }
}
function onCassetteError(event) {
  next_cassette();
}
function youtube_cassette(track){
  if (player == null) {
    $('iframe').attr('id','youtubeIframe');

    var youtube_id = track.get('url').replace(/.*(v=|be\/)/,'');
    url = "https://www.youtube.com/embed/"+youtube_id+"?enablejsapi=1&autoplay=1&iv_load_policy=3&origin=https://playbot.skizzk.fr"; //theme=light
    $('#youtubeIframe').attr('src',url);

    player = new YT.Player('youtubeIframe', {
        events: {
            'onError': onCassetteError,
            'onStateChange': onCassetteEnding,
        }
    });
  }
  else {
    player.playVideo();
  }
}
function soundcloud_cassette(track){
  if (player == null) {
    var url = track.get('url'); //.replace(/.*(v=|be\/)/,'');

    $.getJSON(
      "https://soundcloud.com/oembed?url=" + url + "&format=json",
      function ( data ) {
        player = data.html.replace('&show_artwork=true','&auto_play=true');
        $('iframe').replaceWith(player);
        $('iframe').attr('id','soundcloudIframe').addClass('cassette'); 
        setTimeout(soundcloud_listener_cassette, 2000 );
      }
    ).fail(function() {
      next_cassette();
    });
  
  }
  else {
    var widget = SC.Widget('soundcloudIframe');
    widget.play();
  }
}
function soundcloud_listener_cassette() {
  var widget = SC.Widget('soundcloudIframe');
  widget.bind(SC.Widget.Events.READY, function() {
    widget.bind(SC.Widget.Events.FINISH, next_cassette );
  });
}
function stop_cassette(track) {
  $('.vc-control-stop').addClass('vc-control-active');
  $('.vc-control-play').removeClass('vc-control-active');
  stopWheels();
  setTimeout(function() {$('.vc-control-stop').removeClass('vc-control-active');}, 100);
  if ( track.get('provider') == "youtube" ) {
    player.pauseVideo(); 
  }
  else if( track.get('provider') == "soundcloud" ) {
    var widget = SC.Widget('soundcloudIframe');
    widget.pause();
  }
}
function duration(track) {
  if ( track.get('provider') == "youtube" ) {
    return player.getDuration(); 
  }
  else if ( track.get('provider') == "soundcloud" ) {
    var widget = SC.Widget('soundcloudIframe');
    widget.getDuration(function(length) {
      trackLength = length;
    }); 
    return trackLength;
  } 
}
function currentTime(track) {
   if ( track.get('provider') == "youtube" ) {
     return player.getCurrentTime(); 
  } 
  else if ( track.get('provider') == "soundcloud" ) {
    var widget = SC.Widget('soundcloudIframe');
    widget.getPosition(function(position) {
      timeElapsed = position;
    }); 
    return timeElapsed;
  } 
}
function wheelWidthCalc(track) {
  var trackLength = duration(track);
  var current = currentTime(track);
  var wheelWidth = {
        left: ( -70 / trackLength ) * current + 70,
        right: ( 70 / trackLength ) * current
      };
  return wheelWidth;
}
function wheelWidthUpdate(track) {
  var wheelWidth = wheelWidthCalc(track);
  $('.left-wheel').css({ 'box-shadow' : '0 0 0 '+ wheelWidth.left +'px black' });
  $('.right-wheel').css({ 'box-shadow' : '0 0 0 '+ wheelWidth.right +'px black'});
}
function startWheels(track) {
  $('.wheels').addClass('spin');
  wheels = setInterval(function() {wheelWidthUpdate(track)}, 500);
}
function stopWheels() {
  $('.wheels').removeClass('spin');
  clearInterval(wheels);
}
