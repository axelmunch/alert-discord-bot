import { SlashCommandBuilder } from 'discord.js'
import { TARGET_USER_ID } from '../configuration.js'
import { DiscordClient } from '../DiscordClient.js'
import { deleteMessagesToTarget } from '../messages/deleteMessagesToTarget.js'

import type { DiscordCommand } from '../types.js'

export const deleteCommand: DiscordCommand = {
  data: new SlashCommandBuilder()
    .setName('delete')
    .setDescription('Delete messages from the bot to the target user')
    .addIntegerOption((option) => {
      return option
        .setName('limit')
        .setDescription('Message fetch limit')
        .setMinValue(1)
        .setMaxValue(100)
        .setRequired(true)
    })
    .toJSON(),
  execute: async (interaction) => {
    if (interaction.user.id !== TARGET_USER_ID) {
      await interaction.reply({
        content: `You cannot delete the messages because you are not the targeted user.`,
        ephemeral: true
      })
      return
    }

    const limit = interaction.options.getInteger('limit', true)

    const deleteCount = await deleteMessagesToTarget(
      await DiscordClient.getInstance(),
      limit
    )
    await interaction.reply({
      content: `Deleting ${deleteCount} message${
        deleteCount > 1 ? 's' : ''
      }...`,
      ephemeral: true
    })
  }
}
