const {flenn, Message, MessageEmbed } = require ('discord.js');
const translate = require('@iamtraction/google-translate')
module.exports = {
  name: 'translate',
  description: 'translate a text',
  aliases: ['translate'],
  emoji: '**>** ',
  guildOnly: true,
  args: false,
    permissions: false,



  run: async (flenn, message, args) => {

    try {
      const query = args.slice(1).join(" ");
    if (!query) return message.reply("What should i translate? ex - >translate french hello")
const arg = args[0]

    const translated = await translate(query, {to: `${arg}`});
    const embed = new MessageEmbed()
    .setTitle("Translated!.")
    .addField("Your Word", `\`\`\`fix\n${query}\`\`\``)
    .addField('Selected Language', `\`\`\`fix\n${arg}\`\`\``)
    .addField('Result', `\`\`\`fix\n${translated.text}\`\`\``)
    .setColor("BLACK")
   message.channel.send({embeds: [embed]})

    } catch (error) {
      return message.channel.send(" **invalid**")
      .then(() => console.log(error));
    }
  }
}  
