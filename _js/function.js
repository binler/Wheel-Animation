


  var button = $('.btn_quay');
  var circle = $('.circle');

  button.click(function(){

    var during = circle.css("-webkit-animation-play-state");
    var goc = circle.css("-webkit-transform");

    // Get value Angel of wheel
    var values = goc.split('(')[1];
    values = values.split(')')[0];
    values = values.split(',');
    var a = values[0];
    var b = values[1];
    var c = values[2];
    var d = values[3];

    var scale = Math.sqrt(a*a + b*b);
    var sin = b/scale;
    var angle = Math.round(Math.asin(sin) * (180/Math.PI));

    if (during == "paused") {
      circle.css({"-webkit-animation-play-state" : "running"});
    } else {
      circle.css({"-webkit-animation-play-state" : "paused"});
    }

  });
