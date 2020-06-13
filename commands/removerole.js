module.exports.run = async (bot, message, args) => {
    let vipRole = message.guild.roles.cache.get("719607951802761287");
    const member = message.mentions.members.first();

    member.roles.remove(vipRole);
    message.channel.send(`Role Mored Nazar Az ${member} Hazf Shod`)
}

module.exports.config = {
    name: "removerole",
    description: "remove Role Of Users",
    usage: "$removerole",
    accessableby: "Moderator",
    aliases: ["rr"]
}