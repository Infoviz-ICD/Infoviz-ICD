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