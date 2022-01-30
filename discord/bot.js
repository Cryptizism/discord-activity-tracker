require('dotenv').config();
const { Client, Intents, MessageEmbed } = require('discord.js');

module.exports = {
    onReady: function(client) {
            console.log(`Logged in as ${client.user.tag}!`);
            client.user.setActivity('you sleep...', { type: 'WATCHING' });
    },

    login : function(client) {
        client.login(process.env.BOT_TOKEN);
    }
}
