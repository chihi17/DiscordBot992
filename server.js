// Discord bot implements
const discord = require('discord.js');
const client = new discord.Client();

client.on('ready', message =>
{
    console.log('bot is ready!');
  // Set the client user's presence
  client.user.setPresence({ activity: { name: 'おひるね' }, status: 'READY' })
});

//今後追加

if(process.env.DISCORD_BOT_TOKEN == undefined)
{
    console.log('please set ENV: DISCORD_BOT_TOKEN');
    process.exit(0);
}

client.login( process.env.DISCORD_BOT_TOKEN );
