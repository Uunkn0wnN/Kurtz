const Discord = require("discord.js");
module.exports = {
   name: 'serverlist',
   description: 'bot list server',
   emoji: '**>** ',
   userperm: ['SEND_MESSAGES'],
   botperm: ['SEND_MESSAGES'],
   run(client, message, args) {


     if(message.author.id !== "820532177853743105")
       return message.reply(`Only スマイル Can Use This`)

  client.guilds.cache.forEach((guild) => {
         let icon = guild.iconURL()

            const serverlist = new Discord.MessageEmbed()
      .setTitle(`Servers that ${client.user.tag} is In`)
      .setThumbnail(icon)
      .addField('Server Name', `${guild.name}`)
      .addField('Members', `${guild.memberCount} `)
 .addField('Guild Id', `${guild.id} `)   
            message.channel.send({embeds: [serverlist]})
    })
  }
}  
