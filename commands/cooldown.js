const usedCommand = new Set();

module.exports.run = async (bot, message, args) => {
    if(usedCommand.has(message.author.id)){
        message.reply("Command Dar Cooldown Ast.")
    } else {
        message.reply("Command Az Cooldown Kharej Shod.")

        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        },  5000);
    }
}

module.exports.config = {
    name: "cooldown",
    description: "Cooldown Commands",
    usage: "$cooldown",
    accessableby: "Member",
    aliases: ["CD", "CC"]
}