import type {
  CacheType,
  ChatInputCommandInteraction,
  RESTPostAPIChatInputApplicationCommandsJSONBody,
  ClientEvents,
  Events
} from 'discord.js'

export interface DiscordCommand {
  data: RESTPostAPIChatInputApplicationCommandsJSONBody
  execute: (
    interaction: ChatInputCommandInteraction<CacheType>
  ) => Promise<void>
}

export interface DiscordEvent<
  K extends keyof ClientEvents = Events.ClientReady
> {
  name: K
  once?: boolean
  execute: (..._arguments: ClientEvents[K]) => Promise<void>
}
