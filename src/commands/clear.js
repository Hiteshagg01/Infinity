module.exports = {
    name: 'clear',
    aliases: ['delete', 'c'],
    description: 'Clears the message from the channel',
    async execute(message, cmd) {
        if (!cmd[1]) return message.channel.send(':question: **How many messages u want to delete**');
        if (cmd[2]) return message.channel.send(':warning: **Invaild arguments**')
        if (isNaN(cmd[1])) return message.channel.send(`:loudspeaker: **Please enter a valid number \`${cmd[1]}\` is not a number**`);
        if (cmd[1] < 1) return message.channel.send(':warning: **You must delete atleast one message**');
        if (cmd[1] > 50) return message.channel.send(`:no_entry_sign: nope! you can't do that`);

        await message.channel.messages.fetch({ limit: cmd[1] }).then(messages => {
            message.channel.bulkDelete(messages);
        })

        message.channel.send(`:recycle: **Deleted** \`${cmd[1]}\` **messages** :recycle:\n\`This message will Self-Destruct in 3..2..1..\` `)
            .then(message => {
                setTimeout(() => {
                    message.delete()
                }, 3000)
            });
    }
}