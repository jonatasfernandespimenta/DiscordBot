
module.exports = {
  async pingPong(msg) {
    msg.reply('pong');
  },

  async greetings(msg) {
    msg.reply('olá').then((res) => {
      res.react("👍");
    })
  }

}
