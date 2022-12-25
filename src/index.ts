import { DiscordClient } from './DiscordClient.js'
import { events } from './events/index.js'

const discordClient = await DiscordClient.getInstance()

for (const event of events) {
  if (event.once) {
    discordClient.once(event.name, event.execute)
  } else {
    discordClient.on(event.name, event.execute)
  }
}

await discordClient.login()
