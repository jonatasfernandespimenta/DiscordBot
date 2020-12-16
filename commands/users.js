const userController = require('../controllers/users');
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

module.exports = {
  name: "ping",
  execute() {
    bot.on('message', msg => {
      switch (msg.content.toLowerCase()) {
        case '!ping':
          userController.pingPong(msg);
          break;
      
        case '!oi':
          userController.greetings(msg);
          break;

        default:
          break;
      }
    })
  }
}
