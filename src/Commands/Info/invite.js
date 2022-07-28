const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'invite',
    description: 'Invite Exxyll Today!',
    emoji: '**>** ',
    userperm: ['SEND_MESSAGES'],
    botperm: ['SEND_MESSAGES'],
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setColor('BLUE')
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 256 }))
            .setTitle('Invite me to your server!')
            .setDescription(
                `[Invite and Authorize](https://discord.com/oauth2/authorize?client_id=900035170659360861&permissions=1644971949559&scope=applications.commands%20bot) | [Visit Website](https://shiroweb-dashboard.221447.repl.co) | [Join Support Server](https://discord.gg/UFTXkxRrWT)\n\n[Github](https://github.com/Uunkn0wnN)`
            )
            .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};
