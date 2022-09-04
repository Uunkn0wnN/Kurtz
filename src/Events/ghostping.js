
const { MessageEmbed } = require("discord.js");
const client = require("..");

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
          .setTitle(`💡 Ghostping Detected`)
          .addFields([
            {
              name: `👨 Author`,
              value: `${message.author}`,
            },
            {
              name: `📜 Contant`,
              value: `\`\`\`\n ${message.cleanContent.toString()} \`\`\``,
            },
          ]),
      ],
    });
  }
});
