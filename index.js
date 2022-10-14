const { Client, Collection } = require('discord.js');
const { DiscordTogether } = require('discord-together');
const fs = require('fs');
const prefixSchema = require('./src/Models/Prefix');
require('dotenv').config();

const client = new Client({
    intents: 32767,
});
module.exports = client;

// Append variables to client variable
client.commands = new Collection();
client.slashCommands = new Collection();
client.aliases = new Collection();
client.snipes = new Collection();
client.categories = fs.readdirSync('./src/Commands');
client.discordTogether = new DiscordTogether(client);
client.config = process.env;

const prefix = process.env.PREFIX;

const { joinVoiceChannel } = require('@discordjs/voice');
client.on("ready", async c => {
    setInterval(() => {
  const channelid = "your channel ID"
  const channel = client.channels.cache.get(channelid);
  if (!channel) return
  const connection = joinVoiceChannel({
    channelId: channel.id,
    guildId: channel.guild.id,
    adapterCreator: channel.guild.voiceAdapterCreator,
  });
  connection;
}, 1000 * 60);
});

client.on("messageCreate", message =>{
if(message.author.bot) return
if(message.content.startsWith(prefix + "Hook")){
let args = message.content.split(" ").slice(2).join(" ")
let user = message.mentions.members.first()
  if(user){
if(args){
message.channel.createWebhook(user.user.username, {
  avatar: user.user.avatarURL(),
  reason: 'code by aa'
})
  .then(w=>{w.send(args)
setTimeout (function aa(){w.delete()},1000)
})}
else{
  message.reply("Provide a message")
}}
else{
  message.reply("mention a user")
}
}
  
})

// Initialize project
require('./src/Handler')(client);

// Initialize levelling function
require('./src/Utility/Levelling');

// Connect to database
require('./src/Handler/Mongoose');

client.login(process.env.TOKEN);
```js
const { Client, Collection } = require('discord.js');
const { DiscordTogether } = require('discord-together');
const fs = require('fs');
const prefixSchema = require('./src/Models/Prefix');
require('dotenv').config();

const client = new Client({
    intents: 32767,
});
module.exports = client;

// Append variables to client variable
client.commands = new Collection();
client.slashCommands = new Collection();
client.aliases = new Collection();
client.snipes = new Collection();
client.categories = fs.readdirSync('./src/Commands');
client.discordTogether = new DiscordTogether(client);
client.config = process.env;

const prefix = process.env.PREFIX;

const { joinVoiceChannel } = require('@discordjs/voice');
client.on("ready", async c => {
    setInterval(() => {
  const channelid = "your channel ID"
  const channel = client.channels.cache.get(channelid);
  if (!channel) return
  const connection = joinVoiceChannel({
    channelId: channel.id,
    guildId: channel.guild.id,
    adapterCreator: channel.guild.voiceAdapterCreator,
  });
  connection;
}, 1000 * 60);
});

client.on("messageCreate", message =>{
if(message.author.bot) return
if(message.content.startsWith(prefix + "Hook")){
let args = message.content.split(" ").slice(2).join(" ")
let user = message.mentions.members.first()
  if(user){
if(args){
message.channel.createWebhook(user.user.username, {
  avatar: user.user.avatarURL(),
  reason: 'code by aa'
})
  .then(w=>{w.send(args)
setTimeout (function aa(){w.delete()},1000)
})}
else{
  message.reply("Provide a message")
}}
else{
  message.reply("mention a user")
}
}
  
})

// Initialize project
require('./src/Handler')(client);

// Initialize levelling function
require('./src/Utility/Levelling');

// Connect to database
require('./src/Handler/Mongoose');

client.login(process.env.TOKEN); ````
const { Client, Collection } = require('discord.js');
const { DiscordTogether } = require('discord-together');
const fs = require('fs');
const prefixSchema = require('./src/Models/Prefix');
require('dotenv').config();

const client = new Client({
    intents: 32767,
});
module.exports = client;

// Append variables to client variable
client.commands = new Collection();
client.slashCommands = new Collection();
client.aliases = new Collection();
client.snipes = new Collection();
client.categories = fs.readdirSync('./src/Commands');
client.discordTogether = new DiscordTogether(client);
client.config = process.env;

const prefix = process.env.PREFIX;

const { joinVoiceChannel } = require('@discordjs/voice');
client.on("ready", async c => {
    setInterval(() => {
  const channelid = "your channel ID"
  const channel = client.channels.cache.get(channelid);
  if (!channel) return
  const connection = joinVoiceChannel({
    channelId: channel.id,
    guildId: channel.guild.id,
    adapterCreator: channel.guild.voiceAdapterCreator,
  });
  connection;
}, 1000 * 60);
});

client.on("messageCreate", message =>{
if(message.author.bot) return
if(message.content.startsWith(prefix + "Hook")){
let args = message.content.split(" ").slice(2).join(" ")
let user = message.mentions.members.first()
  if(user){
if(args){
message.channel.createWebhook(user.user.username, {
  avatar: user.user.avatarURL(),
  reason: 'code by aa'
})
  .then(w=>{w.send(args)
setTimeout (function aa(){w.delete()},1000)
})}
else{
  message.reply("Provide a message")
}}
else{
  message.reply("mention a user")
}
}
  
})

// Initialize project
require('./src/Handler')(client);

// Initialize levelling function
require('./src/Utility/Levelling');

// Connect to database
require('./src/Handler/Mongoose');

client.login(process.env.TOKEN);  
