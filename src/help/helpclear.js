module.exports = {
    name: 'helpclear',
    description: 'Helps with using clear command',
    execute(message, cmd, DISC, bot) {
        const clearEmbed = new DISC.MessageEmbed()
            .setColor('#0660BD')
            .setTitle('Clear')
            .setDescription('Delete messages according to user amount')
            .addFields(
                { name: '**Usage:**', value: '`c/clear <number of messge u want to delete>`' }
            )
            .setFooter(message.author.tag)
            .setTimestamp();
            message.channel.send(clearEmbed)

    }
}