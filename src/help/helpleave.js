module.exports = {
    name: 'helpleave',
    description: 'Helps with using leave command',
    execute(message, cmd, DISC, bot) {
        const clearEmbed = new DISC.MessageEmbed()
            .setColor('#0660BD')
            .setTitle('leave')
            .setDescription('Stops the song and leaves the voice channel')
            .addFields(
                { name: '**Usage:**', value: '`c/leave`' }
            )
            .setFooter(message.author.tag)
            .setTimestamp();
            message.channel.send(clearEmbed)

    }
}