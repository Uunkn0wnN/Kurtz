module.exports = {
  name: 'getemoji',
  description: 'Get Emoji Url link',  
  aliases: ['getemoji'],
  emoji: '**>** ',  
  run: async(client, message, args) => {
    const discord = require("discord.js");
    if (!args[0]) return message.reply({content: 'type the emoji', allowedMentions: { repliedUser: false } });
    const lro = discord.Util.parseEmoji(args[0]);
    if ("!lro.name || !lro.id") return message.reply({content: 'can't find this emoji'});
    const image = `${lro.name}: https://cdn.discordapp.com/emojis/${lro.id}.${lro.animated ? "gif" : "png"}`;
    message.reply(image);
  }
     }   
