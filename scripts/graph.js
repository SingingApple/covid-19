const confirmedData = [];
const deceasedData = [];
const dates = [];
const recoveredData = [];
const getChart = async () => {
  await getData().then(data => {
    console.log(data);
    data.cases_time_series.forEach(element => {
      dates.push(element.date.slice(0, 6).trim());
      confirmedData.push(JSON.parse(element.totalconfirmed));
      deceasedData.push(JSON.parse(element.totaldeceased));
      recoveredData.push(JSON.parse(element.totalrecovered));
    });
  });

  const confirmed = document.getElementById("confirmed").getContext("2d");
  const confirmedChart = new Chart(confirmed, {
    type: "line",
    data: {
      labels: dates,
      datasets: [
        {
          label: "Confirmed",
          data: confirmedData,
          backgroundColor: ["rgba(255,7,58,.6)"],
          borderColor: ["#ff073a"],

          borderWidth: 2,
          pointRadius: 2
        }
      ]
    },
    options: {
      legend: {
        display: false
      },
      title: {
        display: true,
        fontSize: 25,
        text: "CONFIRMED"
      },
      scales: {
        xAxes: [
          {
            ticks: {
              fontSize: 18,
              maxTicksLimit: 8
            },
            gridLines: {
              display: false
            },
            label: {
              display: false
            }
          }
        ],
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              fontSize: 16
            }
          }
        ]
      }
    }
  });
  const recovered = document.getElementById("recovered").getContext("2d");
  const recoveredChart = new Chart(recovered, {
    type: "line",
    data: {
      labels: dates,
      datasets: [
        {
          label: "Recovered",
          data: recoveredData,
          backgroundColor: ["rgba(40,167,69,.6)"],
          borderColor: ["#28a745"],
          borderWidth: 2,
          pointRadius: 2
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "RECOVERED",
        fontSize: 25
      },
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            ticks: {
              fontSize: 18,
              maxTicksLimit: 8
            },
            gridLines: { display: false }
          }
        ],
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              fontSize: 16
            }
          }
        ]
      }
    }
  });
  const deceased = document.getElementById("deceased").getContext("2d");
  const deceasedChart = new Chart(deceased, {
    type: "line",
    data: {
      labels: dates,
      datasets: [
        {
          label: "Deceased",
          data: deceasedData,
          backgroundColor: ["rgba(108,117,125,.6)"],
          borderColor: ["#6c757d"],
          borderWidth: 2,
          pointRadius: 2
        }
      ]
    },
    options: {
      legend: {
        display: false
      },
      title: {
        display: true,
        fontSize: 25,
        text: "DECEASED"
      },
      scales: {
        xAxes: [
          {
            ticks: {
              fontSize: 18,
              maxTicksLimit: 8
            },
            gridLines: { display: false }
          }
        ],
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              fontSize: 16
            }
          }
        ]
      }
    }
  });
};
getChart();
