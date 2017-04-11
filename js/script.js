$( document ).ready(function() {
  $(".moment-inline").click(function() {
    var sec = $(this).data("sec");
    seekTo(sec);
  });

  $(window).scroll(function() {
    $( '.trivia ul li:in-viewport' ).addClass("visible");
  });

  if($('.anker-image').length > 0) {
    var els = document.getElementsByClassName("anker-image");
    var svg = els[0].children[0];
    new Vivus(svg, {type: 'delayed', duration: 300, animTimingFunction: Vivus.EASE_OUT});
  }

  if($('.set-image').length > 0) {
    els = document.getElementsByClassName("set-image");
    svg = els[0].children[0];
    new Vivus(svg, {type: 'delayed', duration: 300, animTimingFunction: Vivus.EASE_OUT});
  }

});
