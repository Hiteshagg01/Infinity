require('dotenv').config();
const fs = require('fs');
const DISC = require('discord.js');
const { Console } = require('console');
const bot = new DISC.Client();
const prefix = 'c/';
const bot_id_m = process.env.Bot_ID_M;
const bot_id_d = process.env.Bot_ID_D;

bot.commands = new DISC.Collection();

const CommandFiles = fs.readdirSync('./src/commands/').filter(file => file.endsWith('.js'));

for (const file of CommandFiles) {
    const command = require(`./src/commands/${file}`)
    bot.commands.set(command.name, command)
}

bot.on('ready', () => {
    console.clear();
    console.log('Bot is online\n');
});

bot.on('message', (message) => {
    console.log(`${message.author.username} : ${message.content}`)
    console.log(bot_id_m)

    if (message.author.bot) {
        return console.log('===> [Message send by bot donot reply]')
    }
    if (message.content.startsWith(prefix) || message.content.startsWith(bot_id_m) || message.content.startsWith(bot_id_d)) {
        
        var a;
        if (message.content.startsWith(bot_id_m)) {
            a = bot_id_m.length + 1;
        } else if (message.content.startsWith(prefix)) {
            a = prefix.length;
        } else if (message.content.startsWith(bot_id_d)) {
            a = bot_id_d.length + 1;
        }

        const [...cmd_dummy] = message.content
            .trim()
            .substring(a)
            .split(/ +/)

        const cmd = cmd_dummy.map(cmd_dummy => cmd_dummy.toLowerCase());
        console.log(cmd)

        if (cmd[0] === 'ping') {
            bot.commands.get('ping').execute(message, cmd);
        } else if (cmd[0] === 'play' || cmd[0] === 'seek') {
            bot.commands.get('play').execute(message, cmd);
        } else if (cmd[0] === 'leave') {
            bot.commands.get('leave').execute(message, cmd, bot);
        } else if (cmd[0] === 'clear') {
            bot.commands.get('clear').execute(message, cmd);
        } else if (cmd[0] === 'help') {
            bot.commands.get('help').execute(message, cmd, DISC, bot);
        } else {
            return message.channel.send('Wrong Command');
        }
    } else {
        return console.log('===> [But message is not for bot]')
    }
});

bot.login(process.env.DISCORD_BOT_TOKEN);