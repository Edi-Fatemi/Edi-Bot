const Discord = require("discord.js");


var version = "(ver 1.0.0)"
module.exports = bot => {
    console.log(`${bot.user.username + " " + version} Ready!`);

    setInterval(function () {

        let statuses = [
            `${bot.guilds.size}!`,
            '!help',
            `over ${bot.users.size} users!`
    
        ]

		let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setPresence({ activity: { name: bot.user.username + " Server.", type:"WATCHING" }, status: "online" });
        bot.user.setPresence({ activity: { name: bot.users.cache.size + " Members.", type:"WATCHING" }, status: "online" });
        bot.user.setPresence({ activity: { name: bot.guilds.cache.size + " Servers.", type:"WATCHING" }, status: "online" })
    }, 5000)
    
}