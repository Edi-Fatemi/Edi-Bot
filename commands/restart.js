const Discord = require("discord.js");
const config = require("../config.json");


module.exports.run = async (bot, message, args) => {
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let isBotOwner = message.author.id == '492734632228421632';
  
  switch (cmd) {
    case '$restart': {
      if (!isBotOwner)
       return;
          
       
       message.channel.send("Restarted at ... : " + (Date.now() - message.createdTimestamp) )
      .then(msg => {bot.destroy()})
      .then(() => bot.login(config.token))
    break; 
    }
    
  }
      


}


module.exports.config = {
    name: "restart",
    description: "Restart Bot",
    usage: "$restart",
    accessableby: "Owner",
    aliases: []
}