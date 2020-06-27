const Discord = require("discord.js");
const config = require("../config.json");
const translate = require("@vitalets/google-translate-api");

module.exports.run = async (bot, message, args) => {
  
   translate("hello!", { from: "en", to: "fa" }).then((res) => {
       if(message.content === "$hello"){
            message.channel.send(res.text);
    }
     
   });
    
};

module.exports.config = {
  name: "translate",
  description: "Translator",
  usage: "$translate",
  accessableby: "Member",
  aliases: ["trans"],
};
