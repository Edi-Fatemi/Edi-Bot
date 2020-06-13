const Discord = require("discord.js");
const config = require("../config.json");


module.exports.run = async (bot, message, args) => {
    

    if(message.content == "$ping"){ 
    message.channel.send("Pinging ...")
    .then((msg) => { 
        msg.edit("Ping: " + (Date.now() - msg.createdTimestamp))
    });
    }

}

module.exports.config = {
    name: "ping",
    description: "Ping Time",
    usage: "$ping",
    accessableby: "Members",
    aliases: []
}