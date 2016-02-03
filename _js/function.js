$(document).ready(function(){

  var button = $('.btn_quay');
  var circle = $('.circle');
  var arrow = $('.line');

  circle.css({"-webkit-animation-play-state" : "paused"});

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

    var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));

    if (during == "paused") {
      button.text("Stop");
      circle.css({"-webkit-animation-play-state" : "running"});
    } else {
      button.text("Quay");
      circle.css({"-webkit-animation-play-state" : "paused"});
      var arrowTop = arrow.offset().top,
          arrowLeft = arrow.offset().left;
      $('.result').text('Angel: ' + angle + "Top: " + arrowTop);
    }

  });

});
