module.exports = (DISC, bot) => {
    console.log(`\n -- Logged in as : ${bot.user.username} -- \n\n ~Servers:\n`);
    bot.guilds.cache.forEach(server => {
        console.log(` - ~> ${server.name} <~ `); //(id: ${server.id})`);
        // server.channels.cache.forEach((channel) => {
        //     console.log(` -- ${channel.name} (type: ${channel.type}) (id: ${channel.id})`)
        // });
    });
    bot.user.setActivity('c/help', { type: 'WATCHING' });
    console.log('\n - Server Activity > ')
}