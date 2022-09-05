const { Client, Message, MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton } = require("discord.js");

module.exports = {
    name: 'ss',
    description: 'Screen Shot Website',
    emoji: '**>** ',
    run: async (client, message, args) => {
            
const link = args.join("");
  if(!link) return message.reply("Please put a https://example.com Website In order for the command to work");
        
    
    
       
        

        let row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setLabel(`IMAGE`)
            .setEmoji(`1012209440046465137`)
            .setStyle(`LINK`)
            .setURL(`https://api.popcat.xyz/screenshot?url=${link}`),
          
        );
       

        let embed = new MessageEmbed()
        .setTitle("🖼️ • ScreenShot")
                .setImage(`https://api.popcat.xyz/screenshot?url=${link}`)
        .setFooter(`Requested By: ${message.author.username}`)
        .setTimestamp();

        message.reply({
            embeds: [embed],
                    components: [row],
        });
    }
}
