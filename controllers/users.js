const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

module.exports = {
  async pingPong(msg) {
    msg.reply('pong');
  },

  async greetings(msg) {
    msg.reply('olá').then((res) => {
      res.react("👍");
    })
    bot.on('messageReactionAdd', (reaction, user) => {
      if(reaction.emoji.name === "👍") {
        console.log(reaction.users);
        const member = reaction.users;
        member.roles.add('teste');
      }
    })
  },

}
