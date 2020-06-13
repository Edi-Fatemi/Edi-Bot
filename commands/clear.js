const Discord = require("discord.js");
const config = require("../config.json");



module.exports.run = async (bot, message, args) => {

    if (message.deletable) {
        message.delete();
    }
    if (!message.member.hasPermission("MANAGE_MESSAGE")){
        return (await message.reply("Shoma Be In Command Dast Resi Nadarid!")).then(m => m.delete(5000));
    }
    if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
        return message.reply("Lotfan Yek Adad Vared Konid!").then(m => m.delete(5000));
    }

    let deleteAmount;
    if (parseInt(args[0]) > 100) {
        deleteAmount = 100;
    }else {
        deleteAmount = parseInt(args[0]);
    }
    message.channel.bulkDelete(deleteAmount, true)
    .catch(err => message.reply(`Error! ${err}`));
}


module.exports.config = {
    name: "clear",
    description: "clear message",
    usage: "$clear",
    accessableby: "Members",
    aliases: ["c", " " , "purge"]
}