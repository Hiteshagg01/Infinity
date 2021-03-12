module.exports = {
    name: 'help',
    aliases: ['h'],
    description: 'Shows all the commands',
    execute(message, cmd, DISC, bot) {
        if (!cmd[1]) {
            const embed = new DISC.MessageEmbed()
                .setColor('#0660BD')
                .setAuthor(
                    bot.user.username,
                    bot.user.displayAvatarURL({ format: 'png' })
                )
                .setTitle('Don\'t worry we got you')
                .setDescription(`**Prefix: **\`c/\`**You can also use** <@${bot.user.id}> **as prefix** 
                \n**Also type: ** \`c/help <command name>\` for command specific info
                \nHere are all the commands`)
                .addFields(
                    { name: 'Moderation', value: '`clear`' },
                    { name: 'bot', value: '`ping`' },
                    { name: 'Music', value: '`play`, `leave`' },
                    { name: 'Fun', value: '`reddit`'},
                    {name: 'nsfw', value: '`nsfw`'}
                )
                .setFooter(message.author.tag)
                .setTimestamp();
            message.channel.send(embed);
        } else {
            const fs = require('fs');
            const path = require('path');
            const dirPath = path.resolve(__dirname, '../help/')

            bot.help = new DISC.Collection();

            const helpFiles = fs.readdirSync(dirPath).filter(file => file.endsWith('.js'));

            for (const file of helpFiles) {
                const help = require(`${dirPath}/${file}`)
                bot.help.set(help.name, help)
            }
            const argument = bot.help.get(`help${cmd[1]}`)
            if (!argument) {
                return message.channel.send('Such command doesn\'t exist')
            }
            argument.execute(message, cmd, DISC, bot);
        }
    }
}