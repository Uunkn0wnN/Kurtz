const { MessageEmbed } = require('discord.js');

module.exports = {

        name: 'poll',
        description: 'poll',
        emoji: '**>** ',
        userperm: ['SEND_MESSAGES'],
        botperm: ['SEND_MESSAGES'],

  
    run: async (bot, message, args) => {
    
                    if(!message.channel.guild) return;
                     if (!message.member.permissions.has("ADMINISTRATOR")) {
      return message.channel.send("ERROR ❯ need ADMINISTRATOR to make a poll");
    }
                  
      
            
        const poll = args.join(" ");
  if(!poll) return message.reply("Please send a message to make a poll please Something.");

        const embed = new MessageEmbed()
            .setColor("GREEN")
            .setTitle(`❯ Poll For ${message.guild.name} Guild`)
                        .addField(`❯ 🧧Poll Message`, `${poll}`)
                        .addField(`❯ ✨ Owner`, `${message.author.username}`)
                .setImage("https://cdn.discordapp.com/attachments/939679656196603954/946670806191198258/standard.gif")
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
           
 var msg = await   message.channel.send({ embeds: [embed] })

        await msg.react('981998780138270820');
        await msg.react('981998760139845712');

        message.delete({ timeout: 1000 });
    }
}
