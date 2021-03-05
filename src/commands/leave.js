const VoiceChannel = require('discord.js')
module.exports = {
    name: 'leave',
    description: 'bot leaves the channel',
    execute(message, cmd, bot) {
        const VoiceChannel = message.member.voice.channel;
        // const botvoice = bot.voiceConnections.get(814374958296858624).channel.id;
        // if(!botvoice) return message.channel.send('bot is not connected to any voice');
        if (!VoiceChannel) return message.channel.send(':o:`You must be in same voice channel with bot to do that`');

        VoiceChannel.leave();
        message.channel.send('`Leaving`');
    }
}