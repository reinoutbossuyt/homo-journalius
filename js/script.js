$( document ).ready(function() {
  $(".moment-inline").click(function() {
    var sec = $(this).data("sec");
    seekTo(sec);
  });
});
