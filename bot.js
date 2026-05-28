const mineflayer = require('mineflayer')

function startBot() {
    const bot = mineflayer.createBot({
      host: 'MCKC.PL',
      username: 'SyzyfBot123',
      version: false
    })

    bot.on('spawn', () => {
      console.log('Bot wszedł na serwer!')
      setTimeout(() => {
        bot.chat('/login syzyf123')
      }, 3000)
    })

    bot.on('message', (jsonMsg) => {
      console.log(jsonMsg.toString())
    })

    bot.on('kicked', (reason) => {
      console.log('Wyrzucono z serwera:', reason)
      // Czekamy 60 sekund i próbujemy ponownie, zamiast zamykać bota
      setTimeout(startBot, 60000)
    })

    bot.on('error', (err) => {
      console.log('Błąd:', err)
      setTimeout(startBot, 60000)
    })
}

startBot()

// Prosty serwer HTTP, żeby Render nie usypiał bota
const http = require('http');
http.createServer((req, res) => {
  res.write('Bot dziala');
  res.end();
}).listen(process.env.PORT || 3000);
