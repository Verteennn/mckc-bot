const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'MCKC.PL',
  username: 'SyzyfBot123',
  version: false
})

bot.on('spawn', () => {
  console.log('Bot online')

  setTimeout(() => {
    bot.chat('/login syzyf123')
  }, 3000)
})

bot.on('error', err => console.log(err))
bot.on('kicked', reason => console.log(reason))
