import {
  MESSAGE_QUANTITY_MULTIPLIER,
  TARGET_USER_ID
} from '../configuration.js'
import { DiscordClient } from '../DiscordClient.js'

export const sendAlertMessageToTarget = async (
  discordClient: DiscordClient,
  message: string
) => {
  const user = await discordClient.users.fetch(TARGET_USER_ID)

  for (let i = 0; i < MESSAGE_QUANTITY_MULTIPLIER; i++) {
    user.send(message)
  }
}
