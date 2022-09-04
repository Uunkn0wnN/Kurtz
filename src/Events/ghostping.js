
const { MessageEmbed } = require("discord.js");
const client = require("../../index");

client.on("messageDelete", async (message) => {
  if (!message.guild || message.author.bot) return;
  if (message.member.permissions.has("ADMINISTRATOR")) return;
  let member = message.mentions.members.first();
  if (member) {
    if (member.id === message.author.id) return;
    message.channel.send({
      embeds: [
        new MessageEmbed()
          .setColor("RANDOM")
          .setTitle(`**Ghostping Detected**`)
          .addFields([
            {
              name: `> Message-Author`,
              value: `${message.author}`,
            },
            {
              name: `> Ping`,
              value: `${message.cleanContent.toString()}`,
            },
          ]),
      ],
    });
  }
});
