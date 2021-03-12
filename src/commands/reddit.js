const redditFetch = require('reddit-fetch');

module.exports = {
    name: 'reddit',
    aliases: ['memes', 'gtaonline', 'aww', 'copypaste'],
    description: "This command shows reddit post",
    execute(message, cmd, DISC) {
        if (cmd[0] === 'reddit') {
            cmd[0] = 'all';
        }
        if (cmd[1]) cmd[0] = cmd[1];
        redditFetch({
            subreddit: cmd[0],
            sort: 'hot',
            allowNSFW: false,
            allowModPost: true,
            allowCrossPost: true,
            allowVideo: false
        }).then(post => {
            console.table(post);
            const reddit = new DISC.MessageEmbed()
                .setColor('#FF0000')
                .setAuthor(post.subreddit_name_prefixed)
                .setTitle(post.title)
                .setURL(post.url)
                .setImage(post.url)
                .addFields({name: 'ups', value: post.ups})
                .setFooter(message.author.tag)
                .setTimestamp();
            message.channel.send(reddit);
        });
    }
}