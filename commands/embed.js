const Discord = require("discord.js");
const config = require("../config.json");
const { Bio } = require('discord.bio');
const scores = require("../scores.json");
typeof scores;


module.exports.run = async (bot, message, args) => {

    let days = Math.floor(bot.uptime / 86400000);
    let hours = Math.floor(bot.uptime / 3600000) % 24;
    let minutes = Math.floor(bot.uptime / 60000) % 60;
    let seconds = Math.floor(bot.uptime / 1000) % 60;


    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;


   const embed = new Discord.MessageEmbed()
        .setTitle("Gamers.")
        .setURL("https://discord.gg/SjBVuVv")  //("https://www.twitch.tv/e_d_i")
        .setAuthor(member.user.tag, member.user.displayAvatarURL({dynamic: true}))
        .addField({ name:"**Smasher Basher.**", value: "https://discord.gg/3ktaRPx", inline: true})
        .addField({name: "uptime", value:`${days}d ${hours}h ${minutes}m ${seconds}s`, inline: true, dynamic: true})
        .setColor("#9307D8")
        .setThumbnail("https://cdn.discordapp.com/attachments/660199575872602126/682459904287834147/photo-1538481199705-c710c4e965fc.jpg")
        .setImage(bot.user.displayAvatarURL())
        .setFooter(bot.user.username)
        .setTimestamp()
    message.channel.send(embed);

}

module.exports.config = {
    name: "embed",
    description: "User Embed",
    usage: "$embed",
    accessableby: "Members",
    aliases: []
}