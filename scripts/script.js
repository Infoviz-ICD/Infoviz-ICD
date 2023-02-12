
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

$(document).ready(function() {
  var trace1 = {
    x: [2010, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    y: [1, 1, 11, 5, 2, 3, 15, 2824, 7283, 5355, 6449, 755],
    type: 'scatter',
    line: {color:"#f0cb69"}
  };



  var data = [trace1];

  Plotly.newPlot('timerange', data);
})


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