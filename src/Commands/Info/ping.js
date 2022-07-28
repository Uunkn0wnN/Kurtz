const { Message, Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Returns Websocket Ping Latency',
    emoji: '**>** ',
    userperm: ['SEND_MESSAGES'],
    botperm: ['SEND_MESSAGES'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setTitle(`Pong!`)
            .setDescription(`Websocket API : ${client.ws.ping} ms!`)
            .setColor('#800080');
        message.channel.send({ embeds: [embed] });
    },
};
