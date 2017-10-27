var min_x=0;
var max_x=8;

new Chart(document.getElementById("mychart"), {
    type: 'bubble',
    data: {
      labels: 'category',
      datasets: [
        {
          label: ["Juristprogrammet Stockholm"],
          backgroundColor: "rgba(255,221,50,0.2)",
          borderColor: "rgba(255,221,50,1)",
          data: [{
            y: 7226,
            x: 1, 
            r: 50
          }]
        }, {
          label: ["Juristprogrammet Uppsala"],
          backgroundColor: "rgba(60,186,159,0.2)",
          borderColor: "rgba(60,186,159,1)",
          data: [{
            y: 6284,
            x: 2,
            r: 40
          }]
        }, {
          label: ["Juristprogrammet Lund"],
          backgroundColor: "rgba(0,0,0,0.2)",
          borderColor: "#000",
          data: [{
            y: 6197,
            x: 3,
            r: 30
          }]
        },{
          label: ["Juristprogrammet Gbg"],
          backgroundColor: "rgba(150,30,10,0.2)",
          borderColor: "rgba(193,46,12,1)",
          data: [{
            y: 5737,
            x: 4,
            r: 20
          }]
        }, {
          label: ["Läkarprogrammet KI"],
          backgroundColor: "rgba(0,0,255,0.2)",
          borderColor: "blue",
          data: [{
            y: 5679,
            x: 5,
            r: 15
          }]
        },{
          label: ["Socionomprogrammet Stockholm"],
          backgroundColor: "rgba(0,102,0,0.2)",
          borderColor: "green",
          data: [{
            y: 5434,
            x: 6,
            r: 10
          }]
        },{
          label: ["Läkarprogrammet Uppsala"],
          backgroundColor: "rgba(102,0,102,0.2)",
          borderColor: "#000",
          data: [{
            y: 5343,
            x: 7,
            r: 8
          }]
        }
      ]
    },

    options: {
      title: {
        display: true,
      }, scales: {
        yAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Number of applicants"
          }
        }],
        xAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Programs Ranking"
          
          }
        }]
      }
    }
});
