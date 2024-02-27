import selectQuotation from "./printQuotation.js";

const dollarChart = document.getElementById('dollarChart')

const chartForDollar = new Chart(dollarChart, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'Dollar',
      data: [],
      borderWidth: 1
    }]
  },
});

function getTime(){
  let date = new Date()
  let time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
  return time
}

function updateChart(chart, labels, data){
  chart.data.labels.push(labels)
  chart.data.datasets.forEach(dataset => dataset.data.push(data))
  chart.update()
}

let workerDollar = new Worker('./scripts/workers/workerDollar.js')
workerDollar.postMessage('usd')
workerDollar.addEventListener('message', event => {
  let time = getTime()
  let value = event.data.ask
  selectQuotation("dollar", value)
  updateChart(chartForDollar, time, value)
})

const ieneChart = document.getElementById('ieneChart')
const chartForIene = new Chart(ieneChart, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'Iene',
      data: [],
      borderWidth: 1
    }]
  }
})

let workerIene = new Worker('./scripts/workers/workerIene.js')
workerIene.postMessage('iene')
workerIene.addEventListener('message', event => {
  let time = getTime()
  let value = event.data.ask
  selectQuotation("iene", value)
  updateChart(chartForIene, time, value)
})