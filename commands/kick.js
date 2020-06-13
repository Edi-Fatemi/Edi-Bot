const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
   if (!message.member.hasPermission("KICK_MEMBERS"))
        message.channel.send("Shoma Permission Kick Nadarid.");
    else {
        let member = message.guild.members.cache.get(args);
        if(member){
        try{
            await member.kick();
            console.log("Kicked");
            message.channel.send(`${member}, Kicke Shod!`)
        }
            catch(err) {
            console.log(err);
        }
    }
}
}


module.exports.config = {
    name: "kick",
    description: "Kicks a user",
    usage: "$kick",
    accessableby: "Moderator",
    aliases: []
}