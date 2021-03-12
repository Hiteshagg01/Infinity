const VoiceChannel = require('discord.js')
module.exports = {
    name: 'leave',
    aliases: ['lev', 'stop', 'st'],
    description: 'bot leaves the channel',
    execute(message, cmd, bot) {
        const VoiceChannel = message.member.voice.channel;
        const botvoice = bot.VoiceStatus;
        if(botvoice === 4 ) return message.channel.send('I ain\'t playing anything');
        if (!VoiceChannel) return message.channel.send(':o:`You must be in same voice channel with bot to do that`');

        VoiceChannel.leave();
        message.channel.send('`Leaving`');
    }
}