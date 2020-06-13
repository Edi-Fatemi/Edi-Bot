const Discord = require("discord.js");
const { Bio } = require('discord.bio');
const scores = require("../scores.json");
typeof scores;

module.exports.run = async (bot, message, args) => {    
    //We have to set a argument for the help command beacuse its going to have a seperate argument.
    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    //Custom Help command by using the second argument.
    if(helpArgs[0] === 'gaming') {
        return message.reply("Commands Mored Estefadeh Gaming.")
    }

    //Normal usage of (prefix)help without any args. (Shows all of the commands and you should set the commands yourself)
    if(!helpArgs[0]) {
        
        var embed = new Discord.MessageEmbed()
        
        
            .setAuthor(`${bot.user.username} \n\n Commands Mored Etefadeh :`)
            .setDescription('```help | hello | mute | unmute | addrole \nremoverole | embed | kick | ban | meme | ping \nrestart | shutdown | uptime | gamers | cooldown \nsmasherbasher | mrhamed | eclipse | irpixel | clear | 8ball```')
            .setThumbnail("https://cdn.discordapp.com/attachments/679511291794423830/719597839050604625/wallpaper.jpg")
            .addFields({ name: 'Prefix', value: '```$```'})
            .setColor('#9307D8')
            .setFooter(message.author.tag)
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