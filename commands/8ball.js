const Discord = require("discord.js");
const config = require("../config.json");


module.exports.run = async (bot, message, args) => {

    
    if (!args[3]) return message.reply("Lotfan Soal Kamel Beporsid.!");
    let replies = ["Yes.", "No.", "Nemidonam.", "Shayad.", "Badan Soal konid.", "Kiri.", "Kheyli.", "Chokh Ziba.", "Sikim Khiyari.", "Shomale Yadam Bere", "Kos'sher Nago.", "Dorogh Migi.", "Begoo Be Emam Majid.", "Be Qoran Karim'ina.", "Ye Dildo Talaei."];
    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;
    let result = Math.floor((Math.random() * replies.length));
    let questionArray = message.content.split(" ");
    let questionArgs = args.slice(3);

    let ballembed = new Discord.MessageEmbed()
    .setAuthor(bot.user.username)
    .setColor("#9307D8")
    .setThumbnail(member.user.displayAvatarURL(), message.author.tag)
    .addField("Soal: ", questionArgs)
    .addField("Javab: ", replies[result])
    .setFooter(bot.user.username)
    .setTimestamp();

    message.channel.send(ballembed);
    
}



module.exports.config = {
    name: "8ball",
    description: "Answer a Fun questions",
    usage: "$8ball",
    accessableby: "Member",
    aliases: []
}