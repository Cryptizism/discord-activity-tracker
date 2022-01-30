const { MessageEmbed } = require('discord.js');

module.exports = {

    stats : function(message, client) {
        var guild = client.guilds.cache.get("788094168618106880");
        
        var onlineCount = guild.members.cache.filter(m => m.presence?.status === 'online').size;

        var idleCount = guild.members.cache.filter(m => m.presence?.status === 'idle').size;

        var dndCount = guild.members.cache.filter(m => m.presence?.status === 'dnd').size;

        var totalCount = guild.members.cache.size;

        var offlineCount = totalCount - (onlineCount + idleCount + dndCount);

        var embed = new MessageEmbed()
            .setTitle('Server Stats')
            .setColor('#0099ff')
            .setDescription(`**Online:** ${onlineCount}\n**Offline:** ${offlineCount}\n**Idle:** ${idleCount}\n**DND:** ${dndCount}\n**Total:** ${totalCount}`);

        return embed;
    }

}