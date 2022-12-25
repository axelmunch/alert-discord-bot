import { REST, Routes } from 'discord.js'
import { DiscordClient } from '../DiscordClient.js'

if (process.argv.length <= 2) {
  throw new Error(
    'No user id provided.\nUsage: npm run discord:unregister-commands <userId> [guildId]'
  )
}

const userId = process.argv[2]

let guildId
if (process.argv.length > 3) {
  guildId = process.argv[3]
}

const discordClient = await DiscordClient.getInstance()

if (discordClient.token != null) {
  const discordRest = new REST({ version: '10' }).setToken(discordClient.token)

  if (guildId != null) {
    // Guild
    console.log(`Unregistering commands for guild ${guildId}.`)
    await discordRest
      .put(Routes.applicationGuildCommands(userId, guildId), { body: [] })
      .then(() => console.log('Successfully deleted all guild commands.'))
  } else {
    // Global
    console.log(`Unregistering commands globally.`)
    await discordRest
      .put(Routes.applicationCommands(userId), { body: [] })
      .then(() => console.log('Successfully deleted all application commands.'))
  }
}
