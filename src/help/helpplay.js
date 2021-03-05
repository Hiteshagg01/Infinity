module.exports = {
    name: 'helpplay',
    description: 'Helps with using play command',
    execute(message, cmd, DISC, bot) {
        const clearEmbed = new DISC.MessageEmbed()
            .setColor('#0660BD')
            .setTitle('play')
            .setDescription('Delete messages according to user amount')
            .addFields(
                { name: '**Usage:**', value: '`c/play <number of messge u want to delete>`' }
            )
            .setFooter(message.author.tag)
            .setTimestamp();
            message.channel.send(clearEmbed)

    }
}