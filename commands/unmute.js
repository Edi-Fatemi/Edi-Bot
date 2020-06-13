const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission(['MANAGE_ROLES'])) return;
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])
    if(member.hasPermission(['MANAGE_ROLES']) && !message.member.hasPermission('MANAGE_ROLES')) return;

        let mutedRole = message.guild.roles.cache.get('676105077932556289');
        let verifiedRole = message.guild.roles.cache.get('660622420004044823');
        if(mutedRole) {
            member.roles.remove(mutedRole);
            member.roles.add(verifiedRole);
            message.channel.send(`${member} **Unmute Shod**`);
        }
}



module.exports.config = {
    name: "unmute",
    description: "Unmute A User",
    usage: "$unmute",
    accessableby: "Moderator",
    aliases: []
}