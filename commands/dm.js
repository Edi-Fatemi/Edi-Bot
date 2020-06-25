const Discord = require("discord.js");
const config = require("../config.json");


module.exports.run = async (bot, message, args) => {
    
    if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("Shoma Permission Kafi Baraye Estefadeh Az In Command Ra Nadarid!")
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!user) return message.channel.send(`Shoma Yek Member Ra Mention Nakardid, Ya Id Na'motabar Vared Kardid!`);
    user.user.send(args.slice(1)).join(" ").catch(() => message.channel.send(" Shoma Nemitavanid Be In User Message Mostaqim Befrestid ")).then(() => message.channel.send(`[${message.author.tag}] Yek Message Baraye [${user.user.tag}] Ferestad!`));

}



module.exports.config = {
    name: "dm",
    description: "DM A User In The Guild",
    usage: "$dm",
    accessableby: "Member",
    aliases: []
}