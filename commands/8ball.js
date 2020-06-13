const Discord = require("discord.js");
const config = require("../config.json");


module.exports.run = async (bot, message, args) => {
    
    if (!args[2]) return message.reply("Lotfan Soal Kamel Beporsid.!");
    let replies = ["Yes.", "No.", "Nemidonam.", "Shayad.", "Badan Soal konid.", "Kiri.", "Kheyli.", "Chokh Ziba.", "Sikim Khiyari.", "Shomale Yadam Bere", "Kos'sher Nago.", "Dorogh Migi.", "Begoo Be Emam Majid.", "Be Qoran Karim'ina.", "Ye Dildo Talaei."];

    let result = Math.floor((Math.random() * result.length));
    let question = args.slice(1).join(" ");

    let embed = new Discord.MessageEmbed()
    .setAuthor(bot.user.username)
    .setColor("#9307D8")
    .addField("Soal: ", question)
    .addField("Javab: ", replies[replies])
    .setFooter(message.author.tag)
    .setTimestamp();

    message.channel.send(embed);
}



module.exports.config = {
    name: "8ball",
    description: "Answer a Fun questions",
    usage: "$8ball",
    accessableby: "Member",
    aliases: ["8"]
}