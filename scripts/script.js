
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

  $(".nextD").click(function () {
    $(".nextD").prop("class", "stop")
    var top = $("#Forth").position().top;
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

$(document).ready(function() {

  //TIMELINE
  var trace1 = {
    x: [2010, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    y: [1, 1, 11, 5, 2, 3, 15, 2824, 7283, 5355, 6449, 755],
    type: 'scatter',
    line: {color:"#f0cb69"}
  }

 
  var data = [trace1];

  Plotly.newPlot('timerange', data);



  //REGION COMPARISON
  am5.ready(function() {
    
  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("comparisonregion");
  
  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([
    am5themes_Animated.new(root)
  ]);
  
  // Create chart
  // https://www.amcharts.com/docs/v5/charts/xy-chart/
  var chart = root.container.children.push(am5xy.XYChart.new(root, {
    panX: false,
    panY: false,
    wheelX: "panX",
    wheelY: "zoomX",
    layout: root.verticalLayout
  }));
  
  
  // Add legend
  // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
  var legend = chart.children.push(am5.Legend.new(root, {
    centerX: am5.p50,
    x: am5.p50
  }))
  
  
  // Data
  var data = [{
    region: "Lombardia",
    sites: 1389,
    institutions: 106
  }, {
    region: "Lazio",
    sites: 4488,
    institutions: 0
  }, {
    region: "Toscana",
    sites: 1857,
    institutions: 361
  }, {
    region: "Piemonte",
    sites: 813,
    institutions: 79
  }, {
    region: "Emilia-Romagna",
    sites: 1116,
    institutions: 10
  },
   {
    region: "Puglia",
    sites: 1006,
    institutions: 6
  }, {
    region: "Marche",
    sites: 1156,
    institutions: 28
  }
  , {
    region: "Veneto",
    sites: 1389,
    institutions: 100
  },
   {
    region: "Umbria",
    sites: 775,
    institutions: 8
  }
  , {
    region: "Piemonte",
    sites: 813,
    institutions: 79
  }
  , {
    region: "Abruzzo",
    sites: 338,
    institutions: 60
  }
  , {
    region: "Friuli-Venezia Giulia",
    sites: 635,
    institutions: 3
  },
 
  {
    region: "Campania",
    sites: 2396,
    institutions: 67
  },
  {
    region: "Basilicata",
    sites: 483,
    institutions: 0
  },
  {
    region: "Trentino-Alto Adige",
    sites: 71,
    institutions: 0
  },
  {
    region: "Calabria",
    sites: 981,
    institutions: 0
  },
  {
    region: "Sardegna",
    sites: 773,
    institutions: 0
  },
  {
    region: "Molise",
    sites: 378,
    institutions: 0
  },
  {
    region: "Liguria",
    sites: 938,
    institutions: 0
  },
  {
    region: "Sicilia",
    sites: 214,
    institutions: 0
  },
  {
    region: "Valle d'Aosta",
    sites: 58,
    institutions: 0
  }];
  
  
  // Create axes
  // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
  var yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
    categoryField:"region",
    renderer: am5xy.AxisRendererY.new(root, {
      inversed: true,
      cellStartLocation: 0.1,
      forceHidden: false,
      cellEndLocation: 0.9,
    })
  }));
  
  yAxis.data.setAll(data);
  
  var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
    renderer: am5xy.AxisRendererX.new(root, {
      strokeOpacity: 0.1
    }),
    min: 0
  }));
  
  
  // Add series
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
  function createSeries(field, name, color) {
    var series = chart.series.push(am5xy.ColumnSeries.new(root, {
      name: name,
      xAxis: xAxis,
      yAxis: yAxis,
      valueXField: field,
      fill: color,
      stroke: color,
      forceHidden: false,
      categoryYField: "region",
      sequencedInterpolation: true,
      tooltip: am5.Tooltip.new(root, {
        pointerOrientation: "horizontal",
        labelText: "[bold]{name}[/]\n{categoryY}: {valueX}",
        forceHidden:false
      })
    }));
  
    series.columns.template.setAll({
      height: am5.p100,
      strokeOpacity: 1,      
      forceHidden:false,
    });

    series.data.setAll(data);
    series.appear();
  
    return series;
  }

  
  createSeries("sites", "Sites", "#f0cb69");
  createSeries("institutions", "Institutions", "#ab91c5");
  

  
  // Add legend
  // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
  var legend = chart.children.push(am5.Legend.new(root, {
    centerX: am5.p50,
    x: am5.p50
  }));
  
  legend.data.setAll(chart.series.values);
  
  
  // Add cursor
  // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
  var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
    behavior: "zoomY"
  }));
  cursor.lineY.set("forceHidden", true);
  cursor.lineX.set("forceHidden", true);
  
  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  chart.appear(1000, 100);
  
  }); // end am5.ready()
})