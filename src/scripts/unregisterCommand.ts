import { REST, Routes } from 'discord.js'
import { DiscordClient } from '../DiscordClient.js'

if (process.argv.length <= 3) {
  throw new Error(
    'No user and command id provided.\nUsage: npm run discord:unregister-command <userId> <commandId> [guildId]'
  )
}

const userId = process.argv[2]
const commandId = process.argv[3]

let guildId
if (process.argv.length > 4) {
  guildId = process.argv[4]
}

const discordClient = await DiscordClient.getInstance()

if (discordClient.token != null) {
  const discordRest = new REST({ version: '10' }).setToken(discordClient.token)

  if (guildId != null) {
    // Guild
    console.log(`Unregistering command for guild ${guildId}.`)
    await discordRest
      .delete(Routes.applicationGuildCommand(userId, guildId, commandId))
      .then(() => console.log('Successfully deleted guild command.'))
  } else {
    // Global
    console.log(`Unregistering command globally.`)
    await discordRest
      .delete(Routes.applicationCommand(userId, commandId))
      .then(() => console.log('Successfully deleted application command.'))
  }
}
