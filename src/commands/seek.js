const ytdl = require('ytdl-core')
const { VoiceChannel, VoiceConnection } = require('discord.js')
module.exports = {
    name: 'seek',
    description: 'seek your music',
    execute(message, cmd) {
        const VoiceChannel = message.member.voice.channel;

        if (!VoiceChannel) return message.channel.send('You must be in same voice channel as bot is in');
        if (!cmd[1]) return message.channel.send('Where you want to seek');
        if (cmd[2]) return message.channel.send('Invalid Arguements');



    }
}