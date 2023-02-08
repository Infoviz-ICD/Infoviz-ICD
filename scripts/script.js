$(document).ready(function() {
  $("#start").click(function() {
    $("#start").animate({bottom: "-100vh"});
    $("#onTop").animate({top: "-20vh"});
    document.getElementById("background").style.background = 0;
  })
});