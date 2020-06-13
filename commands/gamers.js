const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
    
    if (message.content == "$gamers") {
		message.channel.send("https://discord.gg/wH85f2q");
	}

}

module.exports.config = {
    name: "gamers",
    description: "Gamers Server Link ",
    usage: "$gamers",
    accessableby: "Members",
    aliases: []
}