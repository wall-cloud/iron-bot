const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
  console.log(`✅ Connecté en tant que ${client.user.tag}`);
  
  // Tu peux enlever cette ligne si tu veux AUCUN statut
  client.user.setActivity('vos commandes 📦', { type: 'WATCHING' }); 
});

client.login(process.env.TOKEN);
