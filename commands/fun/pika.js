const { Client, Message, MessageAttachment } = require("discord.js");

module.exports = {
  name: "pika",
  description: "Generate Pikachu Pog Memes",
  aliases: [],
  emoji: "<:pika_pog:880280585061404822>",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const text = args.join(" ");
    if (!text) return message.reply("Please specify a text!");
    let image = `https://api.popcatdev.repl.co/pikachu?text=${encodeURIComponent(
      text
    )}`;
    let imgae = new MessageAttachment(image, "poggg pika.png");
    message.channel.send({ files: [imgae] });
  },
};