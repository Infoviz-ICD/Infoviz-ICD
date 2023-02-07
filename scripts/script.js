var xValues = ["Cultural Events sites", "Cultural Properties institutes"];
var yValues = [1509, 2997];
var barColors = ["orange", "green"];

new Chart("Chart1", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Cultural Events sites vs. Cultural Properties sites"
    }
  }
});


var data = [
  {
    x: ['giraffes', 'orangutans', 'monkeys'],
    y: [20, 14, 23],
    type: 'bar'
  }
];

Plotly.newPlot('myDiv', data);


			// create data
var data = [
  ["Lombardia", 1389],
  ["lazio", 4488],
  ["Toscana", 1857],
  ["Piemonte", 813],
  ["Emilia-Romagna", 1116],
  ["Basilicata", 482],
  ["Puglia", 1006],
  ["Abruzzo", 338],
  ["Umbria", 775],
  ["Marche", 1156],
  ["Campania", 2396],
  ["Trentino-Alto Adige", 71],
  ["Calabria", 980],
  ["Sardegna", 773],
  ["Veneto", 1388],
  ["Friuli-Venezia Giulia", 635],
  ["Molise", 378],
  ["Liguria", 938],
  ["Sicilia", 214],
  ["Valle d'Aosta",58]];

container.height(30);
container.width(50);

// create a chart
chart1 = anychart.bar();

// create a bar series and set the data
var series = chart.bar(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();