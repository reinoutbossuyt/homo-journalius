$( document ).ready(function() {

  $(".seek").click(function() {
    var sec = $(this).data("sec");
    seekTo(sec);
    location.hash = "#video";
  });

  $(window).scroll(function() {
    $( '.trivia ul li:in-viewport' ).addClass("visible");
  });

  if($('.drawing').length > 0) {
    var els = document.getElementsByClassName("drawing");
    var svg = els[0].children[0];
    new Vivus(svg, {type: 'delayed', duration: 300});
  }

});

$(window).on('hashchange',function(){
    window.location.reload(true);
});
