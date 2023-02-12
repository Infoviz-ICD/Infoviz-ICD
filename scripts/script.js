
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


  //CULTURAL EVENTS REGION - SITE COUNT
  am5.ready(function() {
  
  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("sitesperregion");
  
  
  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([
    am5themes_Animated.new(root)
  ]);
  
  
  // Create chart
  // https://www.amcharts.com/docs/v5/charts/xy-chart/
  var chart = root.container.children.push(am5xy.XYChart.new(root, {
    panX: true,
    panY: true,
    wheelX: "panX",
    wheelY: "zoomX",
    pinchZoomX: true
  }));
  
  // Add cursor
  // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
  var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
  cursor.lineY.set("visible", false);
  
  
  // Create axes
  // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
  var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
  xRenderer.labels.template.setAll({
    rotation: -45,
    centerY: am5.p50,
    centerX: am5.p100,
  });
  
  xRenderer.grid.template.setAll({
    location: 1
  })
  
  var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
    maxDeviation: 0.3,
    categoryField: "property",
    renderer: xRenderer,
    tooltip: am5.Tooltip.new(root, {})
  }));
  
  var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    maxDeviation: 0.3,
    renderer: am5xy.AxisRendererY.new(root, {
      strokeOpacity: 0.1
    })
  }));
  
  
  // Create series
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
  var series = chart.series.push(am5xy.ColumnSeries.new(root, {
    name: "Series 1",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "value",
    sequencedInterpolation: true,
    categoryXField: "property",
    tooltip: am5.Tooltip.new(root, {
      labelText: "{valueY}"
    })
  }));
  series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5, strokeOpacity: 0 });
series.columns.template.adapters.add("fill", function(fill, target) {
  return am5.color("#f0cb69");
});

series.columns.template.adapters.add("stroke", function(stroke, target) {
return chart.get("colors").getIndex(series.columns.indexOf(target));
});

  
  // Set data
  var data = [{
    property: "Lombardia",
    value: 1392
  }, {
    property: "Lazio",
    value: 4497
  }, {
    property: "Toscana",
    value: 1863
  }, {
    property: "Piemonte",
    value: 814
  }, {
    property: "Emilia-Romagna",
    value: 1126
  }, {
    property: "Basilicata",
    value: 484
  }, {
    property: "Puglia",
    value: 1006
  }, {
    property: "Abruzzo",
    value: 340
  }, {
    property: "Umbria",
    value: 777
  }, {
    property: "Marche",
    value: 1160
  }, {
    property: "Campania",
    value: 2399
  }
  , {
    property: "Trentino-Alto Adige",
    value: 72
  }
  , {
    property: "Calabria",
    value: 983
  }
  , {
    property: "Sardegna",
    value: 775
  }
  , {
    property: "Veneto",
    value: 1395
  },
   {
    property: "Friuli-Venezia Giulia",
    value: 635
  }
  , {
    property: "Molise",
    value: 378
  },
   {
    property: "Liguria",
    value: 940
  },
   {
    property: "Sicilia",
    value: 214
  }
  , {
    property: "Valle D'Aosta",
    value: 58
  }
];
  
  xAxis.data.setAll(data);
  series.data.setAll(data);
  
  
  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  series.appear(1000);
  chart.appear(1000, 100);
  
  }); // end am5.ready()


  am5.ready(function() {
    
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("institutesperregion");
    
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: true,
      panY: true,
      wheelX: "panX",
      wheelY: "zoomX",
      pinchZoomX: true
    }));
    
    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);
    
    
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
    xRenderer.labels.template.setAll({
      rotation: -45,
      centerY: am5.p50,
      centerX: am5.p100,
    });
    
    xRenderer.grid.template.setAll({
      location: 1
    })
    
    var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      maxDeviation: 0.3,
      categoryField: "property",
      renderer: xRenderer,
      tooltip: am5.Tooltip.new(root, {})
    }));
    
    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      maxDeviation: 0.3,
      renderer: am5xy.AxisRendererY.new(root, {
        strokeOpacity: 0.1
      })
    }));
    
    
    // Create series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    var series = chart.series.push(am5xy.ColumnSeries.new(root, {
      name: "Series 1",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      sequencedInterpolation: true,
      categoryXField: "property",
      tooltip: am5.Tooltip.new(root, {
        labelText: "{valueY}"
      })
    }));
    series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5, strokeOpacity: 0 });
series.columns.template.adapters.add("fill", function(fill, target) {
    return am5.color("#ab91c5");
});

series.columns.template.adapters.add("stroke", function(stroke, target) {
  return chart.get("colors").getIndex(series.columns.indexOf(target));
});
  
    
    // Set data
    var data = [{
      property: "Puglia",
      value: 6
    }, {
      property: "Marche",
      value: 28
    },
    {
      property: "Lomnbardia",
      value: 106
    }, {
      property: "Veneto",
      value: 100
    },
    {
      property: "Umbria",
      value: 8
    }, {
      property: "Toscana",
      value: 361
    },
    {
      property: "Emilia-Romagna",
      value: 10
    }, {
      property: "Piemonte",
      value: 79
    },
    {
      property: "Abruzzo",
      value: 60
    }, {
      property: "Friuli-Venezia Giulia",
      value: 3
    },
     {
      property: "Campania",
      value: 67
    }
];
    
    xAxis.data.setAll(data);
    series.data.setAll(data);
    
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);
    
    }); // end am5.ready()
})