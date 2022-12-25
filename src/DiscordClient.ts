import { Client } from 'discord.js'
import { DISCORD_TOKEN } from './configuration.js'

export class DiscordClient extends Client {
  private static instance: DiscordClient | null = null

  private constructor() {
    super({
      intents: []
    })
    this.token = DISCORD_TOKEN
  }

  public static async getInstance(): Promise<DiscordClient> {
    if (DiscordClient.instance == null) {
      DiscordClient.instance = new DiscordClient()
    }
    return DiscordClient.instance
  }
}
