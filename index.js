const Discord = require("discord.js");
const bot = new Discord.Client({ disableEveryone: true });
const config = require("./config.json");
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const heroku = require("./config.json");
const github = require("./config.json");
const Sequelize = require('sequelize');
const { Bio } = require('discord.bio');
require("./util/eventHandler")(bot);
const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
const http = require("http");
const moment = require('moment');
const moment2 = require("moment-timezone");
var { DateTime } = require('luxon');
DateTime.local();
const clock = require("node-emoji-clock");

var servers = {};


fs.readdir("./commands/", (err, files) => {

	if (err) console.log(err)

	let jsfile = files.filter(f => f.split(".").pop() === "js")
	if (jsfile.length <= 0) {
		return console.log("[LOGS] Couldn't Find Commands!");
	}

	jsfile.forEach((f, i) => {
		let pull = require(`./commands/${f}`);
		bot.commands.set(pull.config.name, pull);
		pull.config.aliases.forEach(alias => {
			bot.aliases.set(alias, pull.config.name)
		});
	});
});

bot.on("message", async message => {
	if (message.author.bot || message.channel.type === "dm") return;

	let prefix = config.prefix;
	let messageArray = message.content.split(" ");
	let cmd = messageArray[0];
	let args = message.content.substring(message.content.indexOf(" ") + 1);
	if (!message.content.startsWith(prefix)) return;
	let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
	if (commandfile) commandfile.run(bot, message, args)


	
	const scores = require("./scores.json");
	typeof scores; // object

	if(!scores[message.author.tag]){ // Check if there's an object called as message authors' tag
	scores[message.author.tag] = { // Create a new object in scores variable
		money: 0 // New property "money" in user object
	};
	}
	if(message.author.bot) return;
	if(!scores[message.author.tag]){ 
		scores[message.author.id] = { 
			money: 0 
		};
	}
	scores[message.author.tag].money += 25;
	fs.writeFileSync("./scores.json", JSON.stringify(scores))
	

});


 bot.login(process.env.token); 
