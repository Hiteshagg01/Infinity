const DISC = require('discord.js');
const bot = new DISC.Client();
const prefix = 'c/';

bot.on('ready', () => {
    console.log('\nYes boss!\non it')
});

bot.on('message', (message) => {
    console.log(`\n${message.author.username} : ${message.content}`)
    if (message.author.bot) return console.log('Message send by bot cannot reply')
    if (!message.content.startsWith(prefix)) return console.log('Message is not for bot')
    
    const [...comm] = message.content
    .trim()
    .substring(prefix.length)
    .split(/ +/)
    //console.log(comm)
    
    if (comm[0] === 'ping') {
        if (comm.length > 1) {
            message.channel.send('command invoked but with invalide args')
            return;
        } message.channel.send('pong')
    }
});

require('dotenv').config();
bot.login(process.env.DISCORD_BOT_TOKEN);