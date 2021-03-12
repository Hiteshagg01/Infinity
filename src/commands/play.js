const yts = require('yt-search');
const ytdl = require('ytdl-core');

module.exports = {
    name: 'play',
    aliases: ['p', 'pl'],
    description: "Music Command",
    async execute(message, cmd) {
        cmd.shift();
        const VoiceChannel = message.member.voice.channel;

        if (!VoiceChannel) return message.channel.send(':x:`You must be in a voice channel to use that command`');
        if (!cmd[0]) return message.channel.send(':question:`What do u want to play`');

        const videoFinder = async (search) => {
            message.channel.send(`**Searching**:mag_right: \`${search}\``);
            const videoresult = await yts(search);
            return (videoresult.videos.length > 1 ? videoresult.videos[0] : null);
        }

        const video = await videoFinder(cmd.join(' '));
        if (video) {
            message.channel.send(`\n:thumbsup:**Joined** \`${VoiceChannel.name}\` **bounded to** ${message.channel}`);
            const connect = await VoiceChannel.join();
            const stream = ytdl(video.url, { filter: 'audioonly' })
            message.channel.send(`\n:tada:**Playing** :notes: \`${video.title}\``);
            connect.play(stream, { seek: 0, volume: 1 })
                .on('finish', () => {
                    VoiceChannel.leave();
                })
        } else return message.channel.send(`:x: Cannot find any video related to your query ${cmd.join(' ')} `)
    }
}