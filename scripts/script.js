
$(document).ready(function() {
  $("#start").click(function() {
    var top = $("#First").position().top;
    $('html').scrollTop(top);

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

  $(".nextE").click(function () {
    $(".nextE").prop("class", "stop")
    var top = $("#Fifth").position().top;
    $('html').scrollTop(top);
  })

  $(".nextF").click(function () {
    $(".nextE").prop("class", "stop")
    var top = $("#Sixth").position().top;
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
    var data = [ {
      property: "Lazio",
      value: 4496
    }, {
      property: "Campania",
      value: 2399
    },{
      property: "Toscana",
      value: 1863
    }, {
      property: "Veneto",
      value: 1393
    },{
      property: "Lombardia",
      value: 1390
    },{
      property: "Marche",
      value: 1157
    },{
      property: "Emilia-Romagna",
      value: 1126
    }, {
      property: "Puglia",
      value: 1006
    }, {
      property: "Calabria",
      value: 983
    }
    ,{
      property: "Liguria",
      value: 940
    },{
      property: "Piemonte",
      value: 813
    }, {
      property: "Umbria",
      value: 776
    }
    ,  {
      property: "Sardegna",
      value: 775
    }
    ,{
      property: "Friuli-Venezia Giulia",
      value: 635
    },{
      property: "Basilicata",
      value: 484
    },  {
      property: "Molise",
      value: 378
    },{
      property: "Abruzzo",
      value: 338
    },  {
      property: "Trentino-Alto Adige",
      value: 72
    }, {
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
      var data = [ {
        property: "Toscana",
        value: 361
      },{
        property: "Lomnbardia",
        value: 106
      },{
        property: "Veneto",
        value: 100
      },
      {
        property: "Piemonte",
        value: 79
      },
       {
        property: "Campania",
        value: 67
      },{
        property: "Abruzzo",
        value: 60
      }, {
        property: "Marche",
        value: 28
      },{
        property: "Emilia-Romagna",
        value: 10
      },
       
      {
        property: "Umbria",
        value: 8
      },
      {
        property: "Puglia",
        value: 6
      },
      
      {
        property: "Friuli-Venezia Giulia",
        value: 3
      }
  ];
      
      xAxis.data.setAll(data);
      series.data.setAll(data);
      
      
      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      series.appear(1000);
      chart.appear(1000, 100);
      
      }); // end am5.ready()


    //COUNTS PER TOSCANA
    am5.ready(function() {

      // Create root element
      // https://www.amcharts.com/docs/v5/getting-started/#Root_element
      var root = am5.Root.new("institutespertoscana");
      
      
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
       paddingRight: 15
      });
      
      xRenderer.grid.template.setAll({
       location: 1
      })
      
      var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
       maxDeviation: 0.3,
       categoryField: "city",
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
       categoryXField: "city",
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
      var data = [ {
       city: "Firenze",
       value: 180
      },{
       city: "Pisa",
       value: 64
      }, {
       city: "Siena",
       value: 62
      },{
       city: "Lucca",
       value: 45
      }, {
       city: "Poggio a Caiano",
       value: 5
      }, {
       city: "Pescia",
       value: 5
      }];
      
      xAxis.data.setAll(data);
      series.data.setAll(data);
      
      
      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      series.appear(1000);
      chart.appear(1000, 100);
      
      }); // end am5.ready()


      //SITES
      am5.ready(function() {
  
        // Create root element
        // https://www.amcharts.com/docs/v5/getting-started/#Root_element
        var root = am5.Root.new("sitespertoscana");
        
        
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
          categoryField: "city",
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
          categoryXField: "city",
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
          city: "Firenze",
          value: 828
        },{
          city: "Lucca",
          value: 147
        },
        {
          city: "Siena",
          value: 120
        },
        {
          city: "Pisa",
          value: 83
        },
        {
          city: "Chiusi",
          value: 64
        },
         {
          city: "Pistoia",
          value: 53
        }, {
          city: "Prato",
          value: 47
        },{
          city: "Cerreto Guidi",
          value: 44
        }, {
          city: "Grosseto",
          value: 40
        }, {
          city: "Orbetello",
          value: 30
        }, {
          city: "Monsumanno Terme",
          value: 29
        },{
          city: "Poggio a Caiano",
          value: 26
        },{
          city: "Calci",
          value: 23
        },{
          city: "Portoferraio",
          value: 21
        },{
          city: "Anghiari",
          value: 17
        },{
          city: "Carmignano",
          value: 15
        },{
          city: "Castiglione della Pescaia",
          value: 14
        },{
          city: "Massa",
          value: 10
        }, {
          city: "Viareggio",
          value: 8
        }, {
          city: "Monteriggioni",
          value: 6
        },{
          city: "Empoli",
          value: 5
        },{
          city: "Campiglia Marittima",
          value: 4
        },{
          city: "Camaiore",
          value: 4
        },{
          city: "Piombino",
          value: 4
        },{
          city: "Pescia",
          value: 4
        },  {
          city: "Carrara",
          value: 4
        }
        ];
        
        
        xAxis.data.setAll(data);
        series.data.setAll(data);
        
        
        // Make stuff animate on load
        // https://www.amcharts.com/docs/v5/concepts/animations/
        series.appear(1000);
        chart.appear(1000, 100);
        
        });

  
    Bokeh.set_log_level("info");
    (function() {
      const fn = function() {
        Bokeh.safely(function() {
          (function(root) {
            function embed_document(root) {
            const docs_json = document.getElementById('p1851').textContent;
            const render_items = [{"docid":"9a3bcaed-d0ca-4c7c-9a79-98f0d396748c","roots":{"p1339":"c2a3470e-96b3-4522-bc4c-9c5fd4e02d50"},"root_ids":["p1339"]}];
            root.Bokeh.embed.embed_items(docs_json, render_items);
            }
            if (root.Bokeh !== undefined) {
              embed_document(root);
            } else {
              let attempts = 0;
              const timer = setInterval(function(root) {
                if (root.Bokeh !== undefined) {
                  clearInterval(timer);
                  embed_document(root);
                } else {
                  attempts++;
                  if (attempts > 100) {
                    clearInterval(timer);
                    console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                  }
                }
              }, 10, root)
            }
          })(window);
        });
      };
      if (document.readyState != "loading") fn();
      else document.addEventListener("DOMContentLoaded", fn);
    })();


    (function() {
      const fn = function() {
        Bokeh.safely(function() {
          (function(root) {
            function embed_document(root) {
            const docs_json = document.getElementById('p2211').textContent;
            const render_items = [{"docid":"bf07479a-3083-4db2-8764-52a5f7fbca4d","roots":{"p1686":"aba76160-93e1-4e82-9315-e9e8981bd362"},"root_ids":["p1686"]}];
            root.Bokeh.embed.embed_items(docs_json, render_items);
            }
            if (root.Bokeh !== undefined) {
              embed_document(root);
            } else {
              let attempts = 0;
              const timer = setInterval(function(root) {
                if (root.Bokeh !== undefined) {
                  clearInterval(timer);
                  embed_document(root);
                } else {
                  attempts++;
                  if (attempts > 100) {
                    clearInterval(timer);
                    console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                  }
                }
              }, 10, root)
            }
          })(window);
        });
      };
      if (document.readyState != "loading") fn();
      else document.addEventListener("DOMContentLoaded", fn);
    })();
})