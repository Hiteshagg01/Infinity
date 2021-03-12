require('dotenv').config();
const fs = require('fs');
const DISC = require('discord.js');
const bot = new DISC.Client();

console.log('\n |-|-| Loading |-|-| ');

bot.commands = new DISC.Collection();
console.log('\n -> Now Loading Command Files:')
const CommandFiles = fs.readdirSync('./src/commands/').filter(file => file.endsWith('.js'));
for (const file of CommandFiles) {
    const command = require(`./src/commands/${file}`)
    bot.commands.set(command.name, command)
    console.log(file + ' is loaded')
}

bot.events = new DISC.Collection();
console.log('\n -> Now Loading Event Files:')
const eventFiles = fs.readdirSync('./src/events/').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const event = require(`./src/events/${file}`)
    const eventName = file.split('.')[0]
    bot.on(eventName, event.bind(null, DISC, bot))
    console.log(eventName + '.js is loaded')
}

bot.login(process.env.DISCORD_BOT_TOKEN);