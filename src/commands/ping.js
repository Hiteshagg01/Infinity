module.exports = {
    name: 'ping',
    description: "This is ping command",
    execute(message, cmd) {
        if (cmd.length > 1) {
            message.channel.send('command invoked but with invalide arguments')
            message.author.send('Command u are trying to use is only :point_right:c/ping:point_left:')
            return;
        }
        message.channel.send('**||p||||o||||n||||g||||!||**');
    }
}