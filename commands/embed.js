const Discord = require("discord.js");
const config = require("../config.json");
const { Bio } = require('discord.bio');
const scores = require("../scores.json");
typeof scores;


module.exports.run = async (bot, message, args) => {

    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;


   const embed = new Discord.MessageEmbed()
        .setTitle("Smasher Basher.")
        .setURL("https://discord.gg/SjBVuVv")  //("https://www.twitch.tv/e_d_i")
        .setAuthor(member.user.tag, member.user.displayAvatarURL())
        .setDescription("https://discord.gg/3ktaRPx")
        .setColor("#9307D8")
        .setThumbnail("https://cdn.discordapp.com/attachments/660199575872602126/682459904287834147/photo-1538481199705-c710c4e965fc.jpg")
        .setImage(bot.user.displayAvatarURL())
        .setFooter(bot.user.username)
        .addFields()
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