const { CommandInteraction, Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ownerinfo',
    description: 'Returns Information about Owner',
    userperm: 'SEND_MESSAGES',
    botperm: 'SEND_MESSAGES',
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
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

        interaction.followUp({ embeds: [embed1] });
    },
};
