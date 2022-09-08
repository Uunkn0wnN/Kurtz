const {  client, Message, MessageActionRow, MessageButton,MessageSelectMenu, MessageEmbed } = require("discord.js")
const db = require("quick.db");

module.exports = {
    name: 'purge',
    description: 'purge message',
    aliases: ['purge'],
    emoji: '**>** ',
    userperm: ['MANAGE_MESSAGES'],
    botperm: ['MANAGE_MESSAGES'],
    disable: false,
    run: async (client, message, args) => {
        const GuildMember = message.member;
        if(!GuildMember.permissions.has("MANAGE_MESSAGES")) return message.channel.send(`You do not have permissions to do that!`)
        const amount = args[0];
        if(amount == null) return message.reply("Please Enter A Number Between 1-100!")
        message.channel.bulkDelete(`${amount}`, true)
      

        const embed = new MessageEmbed()
        .setTitle(`✅ • Purged`)
        .addField(`Amount •`, `${amount}`)

        message.channel.send({embeds: [embed]})
    } 
} 
