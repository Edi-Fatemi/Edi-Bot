const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let isBotOwner = message.author.id == '492734632228421632';
    switch (cmd) {

        case '$shutdown': {
            if (!isBotOwner)
              return;
      
            message.channel.send('Shutting down ...' + " 📴 "  )
            .then(m => {bot.destroy()});
            break;
          }

        }
    
}

module.exports.config = {
    name: "shutdown",
    description: "Shutingdown Bot",
    usage:  "$shutdown",
    accessableby: "Owner",
    aliases:  []
}