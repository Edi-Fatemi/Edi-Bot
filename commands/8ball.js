const Discord = require("discord.js");
const config = require("../config.json");


module.exports.run = async (bot, message, args) => {
    
    
    if (!args[2]) return message.reply("Lotfan Soal Kamel Beporsid.!");
    let replies = ["Yes.", "No.", "Nemidonam.", "Shayad.", "Badan Soal konid.", "Kiri.", "Kheyli.", "Chokh Ziba.", "Sikim Khiyari.", "Shomale Yadam Bere", "Kos'sher Nago.", "Dorogh Migi.", "Begoo Be Emam Majid.", "Be Qoran Karim'ina.", "Ye Dildo Talaei."];

    let result = Math.floor((Math.random() * replies.length));
    let questionArray = message.content.split(" ");
    let questionArgs = args.slice(1);

    let ballembed = new Discord.MessageEmbed()
    .setAuthor(bot.user.username)
    .setColor("#9307D8")
    .setThumbnail("https://cdn.discordapp.com/attachments/679511291794423830/719597839050604625/wallpaper.jpg")
    .addField("Soal: ", questionArgs)
    .addField("Javab: ", replies[result])
    .setFooter(message.author.tag)
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