import { SlashCommandBuilder } from 'discord.js'

import type { DiscordCommand } from '../types.js'

export const pingCommand: DiscordCommand = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!')
    .toJSON(),
  execute: async (interaction) => {
    await interaction.reply({
      content: `:ping_pong: Pong! Latency is ${Math.round(
        interaction.client.ws.ping
      )}ms.`,
      ephemeral: true
    })
  }
}
