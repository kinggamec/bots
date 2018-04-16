const Discord = require("discord.js");
const client = new Discord.Client();
///////////////////////////////////////
client.on('ready', () => {  
  console.log(`----------------`);
      console.log(`Desert Bot- Script By : RAMI`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '    `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(` ON ${client.guilds.size} Servers - Prefix *help`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
client.login('Mzk5NTk2Njc0NDQ5ODAxMjE2.DZ7Z_w.sRUGQSm77FNgsEr0D-Vtgf0zq1U')
