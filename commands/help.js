const Discord = require("discord.js");
const { Bio } = require('discord.bio');
const scores = require("../scores.json");
typeof scores;

module.exports.run = async (bot, message, args) => {    
    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;

    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);


    let days = Math.floor(bot.uptime / 86400000);
    let hours = Math.floor(bot.uptime / 3600000) % 24;
    let minutes = Math.floor(bot.uptime / 60000) % 60;
    let seconds = Math.floor(bot.uptime / 1000) % 60;


    //Custom Help command by using the second argument.
    if(helpArgs[0] === 'gaming') {
        return message.reply("Commands Mored Estefadeh Gaming.")
    }

    //Normal usage of (prefix)help without any args. (Shows all of the commands and you should set the commands yourself)
    if(!helpArgs[0]) {
        
        var embed = new Discord.MessageEmbed()
        
        
            .setAuthor(`${member.user.displayAvatarURL(), message.author.tag} \n\n Commands Mored Etefadeh :`)
            .setDescription('```help | hello | mute | unmute | addrole \nremoverole | embed | kick | ban | meme | ping \nrestart | shutdown | uptime | gamers | cooldown \nsmasherbasher | mrhamed | eclipse | irpixel | clear | 8ball \nmemberinfo```')
            .setThumbnail("https://cdn.discordapp.com/attachments/679511291794423830/719597839050604625/wallpaper.jpg")
            .addField({ name: 'Prefix', value: '```$```'})
            .addField(`**${days}D ${hours}H ${minutes}M ${seconds}S**`)
            .setColor('#9307D8')
            .setFooter(bot.user.username)
            .setTimestamp();
        
        message.channel.send(embed);
    }

    //Reads the moudle.exports.config (This line of code is on commands folder, each command will read automaticly) by the second argument (the command name) and shows the information of it.
    if(helpArgs[0]) {
        let command = helpArgs[0];

        if(bot.commands.has(command)) {
            
            command = bot.commands.get(command);
            var embed = new Discord.MessageEmbed()
            .setAuthor(`${command.config.name} Command`)
            .setDescription(`
            - **Command's Description** __${command.config.description || "There is no Description for this command."}__
            - **Command's Usage:** __${command.config.usage || "No Usage"}__
            - **Command's Permissions:** __${command.config.accessableby || "Members"}__
            - **Command's Aliases:** __${command.config.aliases || "No Aliases"}__
            `)
            .setColor('#9307D8')
            .setTimestamp();
        message.channel.send(embed);
    }}
}

module.exports.config = {
    name: "help",
    description: "Commmands Help",
    usage: "$help",
    accessableby: "Members",
    aliases: ["h"]
}