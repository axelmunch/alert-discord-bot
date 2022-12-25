import { TARGET_USER_ID } from '../configuration.js'
import { DiscordClient } from '../DiscordClient.js'

export const deleteMessagesToTarget = async (
  discordClient: DiscordClient,
  fetchLimit: number
): Promise<number> => {
  if (discordClient.user == null) {
    return 0
  }
  const clientId = discordClient.user.id

  const user = await discordClient.users.fetch(TARGET_USER_ID)

  const dmChannel = await user.createDM()

  let delecteCount = 0

  const messages = await dmChannel.messages.fetch({ limit: fetchLimit })
  await Promise.all(
    messages.map(async (message) => {
      const isMessageFromBot = message.author.id === clientId
      if (isMessageFromBot) {
        message.delete()
        delecteCount++
      }
    })
  )
  return delecteCount
}
