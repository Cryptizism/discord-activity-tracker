const { MessageEmbed } = require('discord.js');

module.exports = {

    stats : function(message, client) {
        var games = [];

        var guild = client.guilds.cache.get("788094168618106880");

        var guildMemebers = guild.members.cache;
        
        var onlineCount = guildMemebers.filter(m => m.presence?.status === 'online').size;

        var idleCount = guildMemebers.filter(m => m.presence?.status === 'idle').size;

        var dndCount = guildMemebers.filter(m => m.presence?.status === 'dnd').size;

        guildMemebers.forEach(member => {
            console.log(member.presence?.activities[0].name);

            if (member.presence?.activities || member.presence?.activities.length > 0) {
                games.push(member.presence.activities[0].name);
            }
        });

        var totalCount = guildMemebers.size;

        var offlineCount = totalCount - (onlineCount + idleCount + dndCount);

        var embed = new MessageEmbed()
            .setTitle('Server Stats')
            .setColor('#0099ff')
            .setDescription(`**Online:** ${onlineCount}\n**Offline:** ${offlineCount}\n**Idle:** ${idleCount}\n**DND:** ${dndCount}\n**Total:** ${totalCount}\n**Games:** ${games.join(', ')}`);

        return embed;
    }

}