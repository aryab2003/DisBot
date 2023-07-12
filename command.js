import { REST, Routes } from 'discord.js';

const commands = [
    {
      name: 'server',
      description: 'Replies with server details',
    },
  ];

  const rest = new REST({ version: '10' }).setToken("MTEyODY2OTg0MjYwMjQ2NzM0OA.GIuGTv.F9JkoBeFPW5iQDX-c0U-Y2In2oRHl2Rf45J5h8");

  try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands('1128669842602467348'), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }