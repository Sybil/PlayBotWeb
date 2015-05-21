var track_id;
var player = null;
function next_track() {
  $('iframe').attr('id','iframe');
  if ($("a[data-trackid=\'"+track_id+"\']").length) {
    next = $("a[data-trackid=\'"+track_id+"\']").next();
  }
  else {
    next = $("tr[data-trackid=\'"+track_id+"\']").next();
  }
  next.click();
}
function soundcloud_listener() {
  var widget = SC.Widget('soundcloudIframe');
  widget.bind(SC.Widget.Events.READY, function() {
    widget.bind(SC.Widget.Events.FINISH, next_track );
  });
}
function onPlayerReady(event) {
  event.target.playVideo();
}
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {
    next_track();
  }
}
function onPlayerError(event) {
  next_track();
}
function youtube_turntable(track){
  $('iframe').attr('id','youtubeIframe');

  var youtube_id = track.get('url').replace(/.*(v=|be\/)/,'');
  url = "https://www.youtube.com/embed/"+youtube_id+"?enablejsapi=1&autoplay=1&modestbranding=1&autohide=0&showinfo=0&color=white&iv_load_policy=3&origin=https://playbot.skizzk.fr"; //theme=light
  $('#youtubeIframe').attr('width','100%').attr('height','35').attr('src',url); //640 

  player = new YT.Player('youtubeIframe', {
      events: {
          'onError': onPlayerError,
          'onStateChange': onPlayerStateChange,
      }
  });
}
function soundcloud_turntable(track){
  var url = track.get('url'); //.replace(/.*(v=|be\/)/,'');
  var soundcloud_id;
  $.getJSON(
    "https://soundcloud.com/oembed?url=" + url + "&format=json",
    function ( data ) {
      player = data.html.replace('visual=true&','');
      player = player.replace('&show_artwork=true','&show_artwork=true&color=a8a8a8&buying=false&sharing=false&auto_play=true&player_type=tiny'); 
      $('iframe').replaceWith(player);
      $('iframe').attr('width','100%').attr('height','20').attr('id','soundcloudIframe');  //640 120
      setTimeout(soundcloud_listener, 2000 );
    }
  ).fail(function() {
    next_track(); 
  });
}
function play(track) {
  track_id = track.get('id');
  if ( track.get('provider') == "youtube") {
    youtube_turntable(track);
  }
  else if ( track.get('provider') == "soundcloud" ){
    soundcloud_turntable(track);
  }
  else {
    next_track();
  }
}

