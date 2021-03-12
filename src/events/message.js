const prefix = process.env.PREFIX;
const bot_id_m = process.env.Bot_ID_M;
const bot_id_d = process.env.Bot_ID_D;

module.exports = (DISC, bot, message) => {
    console.log(`${message.author.username} : ${message.content}`)
    if (message.author.bot) return
    if (!message.content.startsWith(prefix) && !message.content.startsWith(bot_id_m) && !message.content.startsWith(bot_id_d)) return

    var flag;
    if (message.content.startsWith(bot_id_m)) {
        flag = bot_id_m.length + 1;
    } else if (message.content.startsWith(prefix)) {
        flag = prefix.length;
    } else if (message.content.startsWith(bot_id_d)) {
        flag = bot_id_d.length + 1;
    }
    const [...cmd] = message.content
        .trim()
        .substring(flag)
        .split(/ +/)
    cmd[0] = cmd[0].toLowerCase();

    const argument = bot.commands.get(cmd[0])
        || bot.commands.find(a => a.aliases && a.aliases.includes(cmd[0]))
    if (!argument) return message.channel.send(':x:`Invalid Command use help to know how to use the bot`');
    argument.execute(message, cmd, DISC, bot);
}