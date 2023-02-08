$(document).ready(function() {
  $("#start").click(function() {
    $("#start").animate({bottom: "-100vh"});
    $("#onTop").animate({top: "-20vh"});
    document.getElementById("background").style.background = 0;
    $("#First").animate({top:"-100vh"})
    $("#CE").prop('id', 'CEvalue');
    $("#CP").prop('id', 'CPvalue');
  })
});

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}