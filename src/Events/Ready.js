require('dotenv').config;
const client = require('../../index');
const chalk = require('chalk');
const prefix = process.env.PREFIX;

client.on('ready', async () => {
    client.user.setActivity(`PEKOB.NET | Live at ${client.guilds.cache.size} Servers`, {
        type: 'STREAMING',
        url: 'https://instagram.com/22.1447?igshid=YmMyMTA2M2Y=',
    });

    console.log(
        `${chalk.grey.bold('[INFO]  ')}${chalk.blueBright.bold(client.user.tag)} ${chalk.white(
            'is'
        )} ${chalk.green.bold('Online')}`
    );
});
