cheet('b a l e m b o y', function () {
  if (Math.random() > 0.5) { 
    var audio = new Audio('/assets/samples/l_balemboy.wav');
  }
  else {
    var audio = new Audio('/assets/samples/s_balemboy.wav');
  }
  audio.play();
});
cheet('n a v i', function () {
  if (Math.random() > 0.5) { 
    var audio = new Audio('/assets/samples/Navi_Hey.wav');
  }
  else {
    var audio = new Audio('/assets/samples/Navi_Listen.wav');
  }
  audio.play();
});
cheet('l i s t e n', function () {
  var audio = new Audio('/assets/samples/Navi_Listen.wav');
  audio.play();
});
cheet('h e y', function () {
  var audio = new Audio('/assets/samples/Navi_Hey.wav');
  audio.play();
});
cheet('n o n', function () {
  var audio = new Audio('/assets/samples/non.mp3');
  audio.play();
});
cheet('o m g', function () {
  if (Math.random() > 0.5) { 
    var audio = new Audio('/assets/samples/omg.ogg');
  }
  else {
    var audio = new Audio('/assets/samples/omg_long.ogg');
  }
  audio.play();
});

