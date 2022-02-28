const statsCommand = require("./discord/events/onCommandCreation.js"); 
const initDiscord = require("./discord/bot.js");
require('dotenv').config();
const { Client, Intents, MessageEmbed } = require('discord.js');

//Discord side

const client = new Client({intents: [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILD_MEMBERS,Intents.FLAGS.GUILD_WEBHOOKS,Intents.FLAGS.GUILD_PRESENCES,]});

client.on('ready', () => {
    initDiscord.onReady(client);
});

client.on('messageCreate', async message => {
    if (!message.content.startsWith('!stats')){ return; }
    let embed = await statsCommand.stats(message, client);
    message.channel.send({ embeds: [embed] });
    console.log(`${message.author.username} used the stats command successfully!`);
});

client.login(process.env.BOT_TOKEN);


//Website side


//Database side