import { REST, Routes } from 'discord.js'
import { commands } from '../commands/index.js'
import { DiscordClient } from '../DiscordClient.js'

if (process.argv.length <= 2) {
  throw new Error(
    'No user id provided.\nUsage: npm run discord:register-commands <userId> [guildId]'
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
    console.log(`Registering commands for guild ${guildId}.`)
    await discordRest
      .put(Routes.applicationGuildCommands(userId, guildId), {
        body: commands.map((command) => {
          return command.data
        })
      })
      .then(() => console.log('Successfully added all guild commands.'))
  } else {
    // Global
    console.log(`Registering commands globally.`)
    await discordRest
      .put(Routes.applicationCommands(userId), {
        body: commands.map((command) => {
          return command.data
        })
      })
      .then(() => console.log('Successfully added all application commands.'))
  }
}
