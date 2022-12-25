import { SlashCommandBuilder } from 'discord.js'
import { DiscordClient } from '../DiscordClient.js'
import { sendAlertMessageToTarget } from '../messages/sendAlertMessageToTarget.js'

import type { DiscordCommand } from '../types.js'

export const alertCommand: DiscordCommand = {
  data: new SlashCommandBuilder()
    .setName('alert')
    .setDescription('Send an alert to the user')
    .addStringOption((option) => {
      return option
        .setName('message')
        .setDescription('Message')
        .setRequired(true)
    })
    .toJSON(),
  execute: async (interaction) => {
    const message = interaction.options.getString('message', true)

    try {
      await sendAlertMessageToTarget(await DiscordClient.getInstance(), message)
    } catch (error) {
      await interaction.reply({
        content:
          'The target user cannot receive this message.\n- Is there a mutual server between the bot and the target user?\n- Does the user allow private messages from server members?\n- Is the bot blocked by the user?',
        ephemeral: true
      })
      return
    }

    await interaction.reply({ content: `Alert sent.`, ephemeral: true })
  }
}
