import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return; 
  try {
    await message.reply({ content: 'Hi from DisBot' });
  } catch (error) {
    console.error('Error sending reply:', error);
  }
});

client.on('interactionCreate', async (interaction) => {
   (!interaction.isCommand() || interaction.commandName !== 'serverinfo') 

  const guild = interaction.guild;
  const memberCount = guild.memberCount;
  const serverInfo = `Server Name: ${guild.name}\nServer ID: ${guild.id}\nMember Count: ${memberCount}`;

  interaction.reply(serverInfo);
  interaction.reply("Here's Pong from DisBot!");
});

client.login("MTEyODY2OTg0MjYwMjQ2NzM0OA.GIuGTv.F9JkoBeFPW5iQDX-c0U-Y2In2oRHl2Rf45J5h8");
