require('dotenv').config();
const { Client, Intents, MessageEmbed } = require('discord.js');

module.exports = {
    //Code that will be called after the onReady event emitted in index.js
    onReady: function(client) {
            console.log(`Logged in as ${client.user.tag}!`);
            client.user.setActivity('you sleep...', { type: 'WATCHING' });
    },

    login : function(client) {
        client.login(process.env.BOT_TOKEN);
    }
}
