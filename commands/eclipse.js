const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
    

	if (message.content == "$eclipse") {
		message.channel.send("https://discord.gg/JyR6fEB");
	}

}

module.exports.config = {
    name: "eclipse",
    description: "Eclipse Server Link ",
    usage: "$eclipse",
    accessableby: "Members",
    aliases: []
}