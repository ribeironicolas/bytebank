addEventListener('message', event => {
  connectAPI()
  setInterval(() => connectAPI(), 5000)
})

async function connectAPI() {
  const connect = await fetch('https://economia.awesomeapi.com.br/last/JPY-BRL ')
  const response = await connect.json()
  postMessage(response.JPYBRL)
}