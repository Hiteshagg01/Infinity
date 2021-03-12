module.exports = {
    name: 'ping',
    aliases: ['latency', 'check'],
    description: "This is ping command",
    async execute(message, cmd, DISC, bot) {
        if (cmd.length > 1) {
            message.channel.send('command invoked but with invalide arguments')
            message.author.send('Command u are trying to use is only :point_right:c/ping:point_left:')
            return;
        }
        message.channel.send(`**pong!** : \`${bot.ws.ping}ms\``);
    }
}