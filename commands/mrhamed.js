const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
    

	if (message.content == "$mrhamed") {
		message.channel.send("https://discord.gg/4fETzM4");
	}
}

module.exports.config = {
    name: "mrhamed",
    description: "MrHamed Server Link ",
    usage: "$mrhamed",
    accessableby: "Members",
    aliases: []
}