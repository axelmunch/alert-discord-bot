import { Events } from 'discord.js'

import type { DiscordEvent } from '../types.js'

export const ready: DiscordEvent<Events.ClientReady> = {
  name: Events.ClientReady,
  once: true,
  execute: async (discordClient) => {
    console.log(
      `Logged in as @${discordClient.user.tag} - ${discordClient.user.id}`
    )
    console.log(
      `Invite link: https://discord.com/oauth2/authorize?client_id=${discordClient.user.id}&permissions=0&scope=bot`
    )
  }
}
