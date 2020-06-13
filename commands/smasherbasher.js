const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
    

	if (message.content == "$smasherbasher") {
		message.channel.send("https://discord.gg/3ktaRPx");
	}

}

module.exports.config = {
    name: "smasher basher",
    description: "Smasher Basher Server Link ",
    usage: "$smasherbasher",
    accessableby: "Members",
    aliases: []
}