async function connectAPI() {
  const connect = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL ')
  const response = await connect.json()
  postMessage(response.USDBRL)
}

addEventListener('message', () => {
  connectAPI()
  setInterval(() => connectAPI(), 5000)
})