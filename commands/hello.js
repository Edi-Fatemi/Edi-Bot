const Discord = require("discord.js");
const config = require("../config.json");


module.exports.run = async (bot, message, args) => {
    return message.channel.send("hello!")
}



module.exports.config = {
    name: "Hello",
    description: "Answers",
    usage: "$hello",
    accessableby: "Member",
    aliases: []
}