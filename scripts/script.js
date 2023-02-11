
$(document).ready(function() {
  $("#start").click(function() {
    $("#start").animate({bottom: "-100vh"});
    $("#onTop").animate({top: "-100vh"});
    document.getElementById("background").style.background = 0;
    $("#First").animate({top:"-100vh"})
    $("#CE").prop('id', 'CEvalue');
    $("#CP").prop('id', 'CPvalue');
    $(".progress-container").removeClass("hide");
  })

  $(".nextB").click(function () {
    $(".nextB").prop("class", "stop")
    var top = $("#Second").position().top;
    $('html').scrollTop(top);
  })

  $(".nextC").click(function () {
    $(".nextC").prop("class", "stop")
    var top = $("#Third").position().top;
    $('html').scrollTop(top);
  })
});



window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progression").style.width = scrolled + "%";
}



/*
function getDocumentOffsetPosition(el) {
  let top = 0, left = 0;
  while (el !== null) {
      top += el.offsetTop;
      left += el.offsetLeft;
      el = el.offsetParent;
  }
  return {top, left};
}*/