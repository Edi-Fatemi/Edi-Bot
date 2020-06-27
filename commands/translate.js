const Discord = require("discord.js");
const config = require("../config.json");
const translate = require("@vitalets/google-translate-api");

module.exports.run = async (bot, message, args) => {
  
    var translate = function(from, to, res){
        
        let translateArray = message.content.split(" ");
        let translateArgs = translateArray.slice(3);

        if(!translateArgs[4]){
            return message.reply("Matn Khod Ra Benevisid!")
        }else{
            message.channel.send(res.from.to);
        }

    }
    let from = "fa-persian";
    let to = "en-us";
};

module.exports.config = {
  name: "translate",
  description: "Translator",
  usage: "$translate",
  accessableby: "Member",
  aliases: ["trans"],
};
