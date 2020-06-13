const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];

    switch (cmd) {

    case '$uptime': {
        let days = Math.floor(bot.uptime / 86400000);
        let hours = Math.floor(bot.uptime / 3600000) % 24;
        let minutes = Math.floor(bot.uptime / 60000) % 60;
        let seconds = Math.floor(bot.uptime / 1000) % 60;
  
        message.channel.send("**Bot Be Modat:** " + `[**${days}d ${hours}h ${minutes}m ${seconds}s**]` + " **Online Bodeh**");
        break;
      }
    }
}

module.exports.config = {
    name: "uptime",
    description: "Online Time Of Bot",
    usage: "$uptime",
    accessableby: "Members",
    aliases: []
}