const redditFetch = require('reddit-fetch');

module.exports = {
    name: 'nsfw',
    aliases: ['ass', 'boobs', 'hentai', 'porn', 'pussy'],
    description: "This command shows a NSFW reddit post",
    execute(message, cmd, DISC) {
        if (!message.channel.nsfw) {
            return message.channel.send('This command can only work on channels marked NSFW');
        }
        if (cmd[0] === 'nsfw') {
            var random = Math.floor(Math.random() * this.aliases.length);
            cmd[0] = this.aliases[random];
        }
        redditFetch({
            subreddit: cmd[0],
            sort: 'hot',
            allowNSFW: true,
            allowModPost: true,
            allowCrossPost: true,
            allowVideo: false
        }).then(post => {
            console.table(post);
            const reddit = new DISC.MessageEmbed()
                .setColor('#FF0000')
                .setTitle(post.title)
                .setURL(post.url)
                .setImage(post.url)
                .setFooter(message.author.tag)
                .setTimestamp();
            message.channel.send(reddit);
        });
    }
}