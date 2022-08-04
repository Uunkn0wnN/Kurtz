const { Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'idban',
    description: 'Ban a user with their ID',
    emoji: '**>** ',
   userperm: ['SEND_MESSAGES'],
   botperm: ['SEND_MESSAGES'],
    run: async (client, message, args) => {

        if (!message.member.permissions.has("BAN_MEMBERS")) return message.reply("You Don't Have The Permission To ban A User!");

        if (!args[0]) return message.reply("You need to specify a user ID");

      let user = args[0];
      let reden = args[1]  'No reason given.'

      let ban = await message.guild.members.ban(user, {
        reden
      })
          const embed1 = new MessageEmbed()
          .setColor('#8BED7F')
          .setTitle(`:white_check_mark: Banned ${ban.tag  "Unknown User"})
          .setDescription(Reason: ${reden})
          return message.reply({ embeds: [embed1]});
        },
      };
