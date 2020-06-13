const Discord = require("discord.js");
const config = require("../config.json");


module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS"))
        message.channel.send("Shoma Permission Ban Nadarid.");
    else{
        let bannedMember = await message.guild.members.ban(args);
        if(bannedMember){
        try {

            console.log(bannedMember.tag + "Ban Shod.");
            message.channel.send(`${bannedMember} Az Server Ban Shod!`)

        }
            catch(err) {
            console.log(err);
        }
    }
}
}

module.exports.config = {
    name: "ban",
    description: "Bans a users",
    usage: "$ban",
    accessableby: "Moderator",
    aliases: []
}