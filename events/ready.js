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
        bot.user.setPresence({ activity: { name: bot.guilds.cache.size + " Servers.", type:"WATCHING" }, status: "online" })
    }, 5000)
    


    bot.guilds.get('660199575872602123').emojis.forEach(emoji => console.log(emoji.animated ? '<a:' + emoji.name + ':' + emoji.id + '>' : '<:' + emoji.name + ':' + emoji.id + '>'));

    // A fancier way
    let static = [], animated = [];
    bot.guilds.get('660199575872602123').emojis.forEach(emoji => emoji.animated ? animated.push([emoji.id, emoji.name]) : static.push([emoji.id, emoji.name]));

    console.log('Static Emojis\n');
    static.forEach(emoji => console.log('<:' + emoji[1] + ':' + emoji[0] + '>'));
    console.log('\nAnimated Emojis\n');
    animated.forEach(emoji => console.log('<a:' + emoji[1] + ':' + emoji[0] + '>'));

}