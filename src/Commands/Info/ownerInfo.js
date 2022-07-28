const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ownerinfo',
    description: 'Returns Information about Exxyll Owner',
    emoji: '**>** ',
    userperm: ['SEND_MESSAGES'],
    botperm: ['SEND_MESSAGES'],
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const owner = client.users.cache.get('820532177853743105');
        const embed1 = new MessageEmbed()
            .setTitle(`👑 Owner Info`)
            .setThumbnail(owner.displayAvatarURL({ dynamic: true }))
            .addField(`Name`, `スマイル`)
            .addField(`Discord Tag`, `⃟҉҈̥̥̥م_スマイル#0359`)
            .addField(`Working on`, `Bot Development, Website Development, Feature Development`)
            .addField(`Location`, `Jakarta, Indonesia`)
            .addField(
                `Social Media`,
                `[Website](https://shiroweb-dashboard.221447.repl.co) | [GitHub](https://github.com/Uunkn0wnN) | [Twitter](https://twitter.com/22_1447)`
            )
            .addField(` Advertising`, `[sponsor](https://discord.gg/YzpFy77yB7)`)
            .setColor('PURPLE');

        message.channel.send({ embeds: [embed1] });
    },
};
