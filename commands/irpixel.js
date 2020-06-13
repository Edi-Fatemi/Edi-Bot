const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
    

	if (message.content == "$irpixel") {
		message.channel.send("https://discord.gg/irpixel");
	}

}

module.exports.config = {
    name: "irpixel",
    description: "IrPixel Server Link ",
    usage: "$irpixel",
    accessableby: "Members",
    aliases: []
}