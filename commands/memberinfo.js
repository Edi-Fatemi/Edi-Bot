const Discord = require('discord.js');
const moment = require('moment');
var { DateTime } = require('luxon');
DateTime.local();

module.exports.run = async (bot, message, args) => {
    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;

    if (member.presence.status === 'dnd') member.presence.status = 'Do Not Disturb';
    if (member.presence.status === 'online') member.presence.status = 'Online';
    if (member.presence.status === 'idle') member.presence.status = 'Idle';
    if (member.presence.status === 'offline') member.presence.status = 'offline';

    let x = Date.now() - member.createdAt;
    let y = Date.now() - message.guild.members.cache.get(member.id).joinedAt;
    const created = Math.floor(x / 86400000);
    const joined = Math.floor(y / 86400000);

    const joineddate = moment.utc(member.joinedAt).format("YYYY, MMMM Do dddd, HH:mm:ss");
    const createddate = moment.utc(member.createdAt).format("YYYY, MMMM Do dddd, HH:mm:ss");
    let status = member.presence.status;

    const userEmbed = new Discord.MessageEmbed()
    .setAuthor(member.user.tag, member.user.displayAvatarURL())
    .setTimestamp()
    .setColor('#9307D8')
    .setImage(member.user.displayAvatarURL())
    .addField("Member ID", member.id)
    .addField('Roles', `<@&${member._roles.join('> <@&')}>`)
    .addField('Created At', `${createddate}`)
    .addField('Joined the server At', `${joineddate} \n> ${joined} day(S) Ago`)
    .addField("Status", status)
    .setThumbnail(bot.user.displayAvatarURL())
    .setFooter(message.author.tag)

    message.channel.send(userEmbed);
}

module.exports.config = {
    name: "memberinfo",
    description: "Shows the information of a member/user",
    usage: "$memberinfo",
    accessableby: "Members",
    aliases: ["userinfo"]
}