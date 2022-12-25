import { Events } from 'discord.js'
import { commands } from '../commands/index.js'
import type { DiscordEvent } from '../types.js'

export const interactionCreate: DiscordEvent<Events.InteractionCreate> = {
  name: Events.InteractionCreate,
  execute: async (interaction) => {
    if (!interaction.isChatInputCommand()) {
      return
    }
    const command = commands.get(interaction.commandName)
    if (command == null) {
      console.error(`Command \`${interaction.commandName}\` not found.`)
      return
    }
    try {
      await command.execute(interaction)
    } catch (error) {
      console.error(error)
      await interaction.reply({
        content:
          'There was an error while executing this command. Please try again later.',
        ephemeral: true
      })
    }
  }
}
