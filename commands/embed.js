const Discord = require("discord.js");
const config = require("../config.json");
const { Bio } = require('discord.bio');
const scores = require("../scores.json");
typeof scores;


module.exports.run = async (bot, message, args) => {
   const embed = new Discord.MessageEmbed()
        .setTitle("Smasher Basher.")
        .setURL("https://discord.gg/3ktaRPx")  //("https://www.twitch.tv/e_d_i")
        .setAuthor(bot.user.username)
        .setDescription("User Embed")
        .setColor("#9307D8")
        .setThumbnail("https://cdn.discordapp.com/attachments/660199575872602126/682459904287834147/photo-1538481199705-c710c4e965fc.jpg")
        .setImage("https://cdn.discordapp.com/attachments/679511291794423830/719597839050604625/wallpaper.jpg")
        .setFooter(message.author.tag)
        .addFields(
            {name: "Test 1", value: "Value 1", inline: true},
            {name: "Test 2", value: "Value 2", inline: true},
            {name: "Test 3", value: "Value 3"},
            {name: "Test 4", value: "Value 4"}
        )
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