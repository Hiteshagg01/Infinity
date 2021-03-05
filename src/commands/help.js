const fs = require('fs');
const { Message } = require("discord.js");
const path = require('path');
const dirPath = path.resolve(__dirname, '../help/')

module.exports = {
    name: 'help',
    description: 'Shows all the commands',
    execute(message, cmd, DISC, bot) {
        if (!cmd[1]) {
            const embed = new DISC.MessageEmbed()
                .setColor('#0660BD')
                .setTitle('Availabe Commands')
                .setAuthor(
                    bot.user.username,
                    bot.user.displayAvatarURL({ format: 'png' })
                )
                .setDescription('**Prefix: **`c/` \n**Type: ** `c/help <command name>` for command specific info')
                // .setThumbnail(message.author.displayAvatarURL({ size: 128 }))
                .addFields(
                    { name: 'Moderation', value: '`clear`' },
                    { name: 'bot', value: '`ping`' },
                    { name: 'Music', value: '`play, leave`' },
                )
                .setFooter(message.author.tag)
                .setTimestamp()
            message.channel.send(embed);
        } else {
            bot.help = new DISC.Collection();
            
            const helpFiles = fs.readdirSync(dirPath).filter(file => file.endsWith('.js'));
            
            for (const file of helpFiles) {
                const help = require(`${dirPath}/${file}`)
                bot.help.set(help.name, help)
            }
            
            if (cmd[1] === 'clear') {
                bot.help.get('helpclear').execute(message, cmd, DISC, bot);
            } else if (cmd[1] === 'play') {
                bot.help.get('helpplay').execute(message, cmd, DISC, bot);
            } else if (cmd[1] === 'leave') {
                bot.help.get('helpleave').execute(message, cmd, DISC, bot);
            }
        }
    }
}