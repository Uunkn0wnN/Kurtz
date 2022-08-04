const { Client, Message, MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = {
    name: 'serverinfo',
    description: 'Returns Information about Server',
    emoji: '**>** ',
    userperm: ['SEND_MESSAGES'],
    botperm: ['SEND_MESSAGES'],
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const vanityCode = message.guild.vanityURLCode;
        let vanityInvite = `https://discord.gg/${vanityCode}`;
        if (vanityCode === null) vanityInvite = 'No custom URL';
        const members = message.guild.members.cache;
        const roles = message.guild.roles.cache.filter(r => r.id !== message.guild.id).map(role => role.toString());
        const embed = new MessageEmbed()
            .setTimestamp()
            .setTitle(message.guild.name)
            .setColor('RANDOM')
            .setThumbnail(message.guild.iconURL({ dynamic: true, size: 512 }))
            .addField(
                `General Information`,
                `Name : ${message.guild.name}\nID : ${
                    message.guild.id
                }\nOwner : ${(await message.guild.fetchOwner()).user}`
            )
            .addField(
                `Counts`,
                `Members Total : ${message.guild.memberCount.toString()}\nRole : ${
                    roles.length
                }\nChannels : ${
                    message.guild.channels.cache.filter(ch => ch.type === 'text' || ch.type === 'voice').size
                } total (Text : ${message.guild.channels.cache.filter(ch => ch.type === 'text').size}, Voice : ${
                    message.guild.channels.cache.filter(ch => ch.type === 'voice').size
                })\nEmojis : ${message.guild.emojis.cache.size} (Regular : ${
                    message.guild.emojis.cache.filter(e => !e.animated).size
                }, Animated : ${message.guild.emojis.cache.filter(e => e.animated).size})`
            )
            .addField(
                `Additional Information`,
                `Created at : ${moment(message.guild.createdTimestamp).format('LLL')} | \`${moment(
                    message.guild.createdTimestamp
                ).fromNow()}\`\nRegion : ${message.guild.region}\nBoost Tier : ${
                    message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'
                }\nBoost Count : ${
                    message.guild.premiumSubscriptionCount.toString() || '0'
                }\nVerification Level : ${message.guild.verificationLevel.toString()}\nVanity URL : ${vanityInvite}`
            )
            .addField(
                `Roles [${roles.length}]`,
                roles.length < 15
                    ? roles.join(' | ')
                    : roles.length > 15
                    ? `${roles.slice(0, 15).join(' | ')} | \`+ ${roles.length - 15} roles...\``
                    : 'None'
            );
        message.channel.send({ embeds: [embed] });
    },
};
