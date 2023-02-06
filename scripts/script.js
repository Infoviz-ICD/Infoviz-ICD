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