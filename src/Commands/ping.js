const {  client, Message, MessageActionRow, MessageButton,MessageSelectMenu, MessageEmbed } = require("discord.js")
const db = require("quick.db");
module.exports = {
    name: 'ping',
    description: 'Returns Websocket Ping Latency',
    emoji: '**>** ',
    run: async (client, message, args) => {
        const row1 = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setLabel(`${client.ws.ping}`)
            .setEmoji(`964513898973790309`)
            .setCustomId(`Ping`)
        
            .setStyle(`PRIMARY`),
        )
    
        const embed = new MessageEmbed()
        .setTitle(`<:sgrerhfde:964522833168457748> • Ping`)
            .setDescription(`**my ping ↙**`)
        
            .setColor(`BLUE`)
            .setFooter(`Reuqested By • ${message.author.username}`)

            message.reply({embeds: [embed], components: [row1] })
    }
} 
