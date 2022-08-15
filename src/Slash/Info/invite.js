const { CommandInteraction, Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'invite',
    description: 'Invite Kurtz Today!',
    userperm: 'SEND_MESSAGES',
    botperm: 'SEND_MESSAGES',
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const embed = new MessageEmbed()
            .setColor('BLUE')
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 256 }))
            .setTitle('Invite me to your server!')
            .setDescription(
                `[Invite and Authorize](https://discord.com/api/oauth2/authorize?client_id=897359232117133324&permissions=1644971949559&scope=bot%20applications.commands) | [Visit Website](https://shiroweb-dashboard.221447.repl.co) | [Join Support Server](https://discord.gg/UFTXkxRrWT)\n\n[follow my instagram](https://instagram.com/22.1447)`
            )
            .setFooter(`${interaction.user.tag}`, interaction.user.displayAvatarURL({ dynamic: true }));

        interaction.followUp({ embeds: [embed] });
    },
};
