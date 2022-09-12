const figlet = require('figlet');
const chalk = require('chalk');

module.exports = async (client) => {
    client.manager.init(client.user.id);
    figlet(client.user.tag, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(chalk.red.bold(data));
    });

    let guilds = client.guilds.cache.size;
    let users = client.users.cache.size;
    let channels = client.channels.cache.size;

    const activities = [
        `k!help | ${guilds} servers | ${channels} channels | ${client.guilds.cache.reduce((users , value) => users + value.memberCount, 0)} user`,
        `Shiro.help`,
        `k!help | ${guilds} servers | ${channels} channels | ${client.guilds.cache.reduce((users , value) => users + value.memberCount, 0)} user`,
        `Shiro music`,
        `k!help | ${guilds} servers | ${channels} channels | ${client.guilds.cache.reduce( ( users , value ) => users + value.memberCount, 0)} user`,
        `https://discord.gg/UFTXkxRrWT`,
        `k!help | ${guilds} servers | ${channels} channels | ${client.guilds.cache.reduce((users , value) => users + value.memberCount, 0)} user`,
        `https://github.com/Uunkn0wnN `,
        `k!help | ${guilds} servers | ${channels} channels | ${client.guilds.cache.reduce((users , value) => users + value.memberCount, 0)} user`,
        `https://shiroweb-dashboard.221447.repl.co`,
        `k!help | ${guilds} servers | ${channels} channels | ${client.guilds.cache.reduce((users , value) => users + value.memberCount, 0)} user`,
        `YOU`,
        `k!help | ${guilds} servers | ${channels} channels | ${client.guilds.cache.reduce((users , value) => users + value.memberCount, 0)} user`,
        `MY SELF`,
        `k!help | ${guilds} servers | ${channels} channels | ${client.guilds.cache.reduce((users , value) => users + value.memberCount, 0)} user`,
        `スマイル`,
        `k!help | ${guilds} servers | ${channels} channels | ${client.guilds.cache.reduce((users , value) => users + value.memberCount, 0)} user`,
        `kontol`,
        `PEKOB.NET`,
        `anjing lu`,
        `Nazarick Clan`,
        `k!help | ${guilds} servers | ${channels} channels | ${users} owner`,
    ]

    setInterval(() => {
        client.user.setActivity(`${activities[Math.floor(Math.random() * activities.length)]}`, { type: "STREAMING", url: "https://www.twitch.tv/RelaxBeats" });
    }, 13000)

};
