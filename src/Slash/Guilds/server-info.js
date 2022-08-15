const { CommandInteraction, Client, MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = {
    name: 'serverinfo',
    description: 'Returns Server Information',
    userperm: 'SEND_MESSAGES',
    botperm: 'SEND_MESSAGES',
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const vanityCode = interaction.guild.vanityURLCode;
        let vanityInvite = `https://discord.gg/${vanityCode}`;
        if (vanityCode === null) vanityInvite = 'No custom URL';
        const members = interaction.guild.members.cache;
        const roles = interaction.guild.roles.cache
            .filter(r => r.id !== interaction.guild.id)
            .map(role => role.toString());
        const embed = new MessageEmbed()
            .setTimestamp()
            .setTitle(interaction.guild.name)
            .setColor('RANDOM')
            .setThumbnail(interaction.guild.iconURL({ dynamic: true, size: 512 }))
            .addField(
                `General Information`,
                `Name : ${interaction.guild.name}\n🆔 ID : ${
                    interaction.guild.id
                }\nOwner : ${(await interaction.guild.fetchOwner()).user}`
            )
            .addField(
                `Counts`,
                `Members Total : ${interaction.guild.memberCount.toString()}\n<:role:863214921574907915> Role : ${
                    roles.length
                }\nChannels : ${
                    interaction.guild.channels.cache.filter(ch => ch.type === 'text' || ch.type === 'voice').size
                } total (Text : ${interaction.guild.channels.cache.filter(ch => ch.type === 'text').size}, Voice : ${
                    interaction.guild.channels.cache.filter(ch => ch.type === 'voice').size
                })\nEmojis : ${interaction.guild.emojis.cache.size} (Regular : ${
                    interaction.guild.emojis.cache.filter(e => !e.animated).size
                }, Animated : ${interaction.guild.emojis.cache.filter(e => e.animated).size})`
            )
            .addField(
                `Additional Information`,
                `📅 Created at : ${moment(interaction.guild.createdTimestamp).format('LLL')} | \`${moment(
                    interaction.guild.createdTimestamp
                ).fromNow()}\`\nRegion : ${
                    interaction.guild.region
                }\nBoost Tier : ${
                    interaction.guild.premiumTier ? `Tier ${interaction.guild.premiumTier}` : 'None'
                }\nBoost Count : ${
                    interaction.guild.premiumSubscriptionCount.toString() || '0'
                }\n🔐 Verification Level : ${interaction.guild.verificationLevel.toString()}\n🔗 Vanity URL : ${vanityInvite}`
            )
            .addField(
                `Roles [${roles.length}]`,
                roles.length < 15
                    ? roles.join(' | ')
                    : roles.length > 15
                    ? `${roles.slice(0, 15).join(' | ')} | \`+ ${roles.length - 15} roles...\``
                    : 'None'
            );
        interaction.followUp({ embeds: [embed] });
    },
};
