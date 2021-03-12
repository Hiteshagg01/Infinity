module.exports = {
    name: "helpplay",
    description: "Helps with using play command",
    execute(message, cmd, DISC, bot) {
        const clearEmbed = new DISC.MessageEmbed()
            .setColor("#0660BD")
            .setTitle("play")
            .setDescription("Plays a certain song:notes:")
            .addFields({ name: "**Usage:**", value: "`c/play <song name>`" })
            .setFooter(message.author.tag)
            .setTimestamp();
        message.channel.send(clearEmbed);
    },
};
