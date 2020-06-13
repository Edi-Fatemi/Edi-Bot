module.exports.run = async (bot, message, args) => {
    let vipRole = message.guild.roles.cache.get("719607951802761287");
    const member = message.mentions.members.first();
    let vip;
    member.roles.add(vipRole);
    message.channel.send(`Role Mored Nazar Baraye ${member} Add Shod.`)
}

module.exports.config = {
    name: "addrole",
    description: "Add Role To Users",
    usage: "$addrole",
    accessableby: "Moderator",
    aliases: ["addr"]
}