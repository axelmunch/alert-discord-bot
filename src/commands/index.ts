import { Collection } from 'discord.js'
import { DiscordCommand } from '../types.js'

import { pingCommand } from './pingCommand.js'
import { alertCommand } from './alertCommand.js'
import { deleteCommand } from './deleteCommand.js'

export const commands: Collection<String, DiscordCommand> = new Collection()
commands.set(pingCommand.data.name, pingCommand)
commands.set(alertCommand.data.name, alertCommand)
commands.set(deleteCommand.data.name, deleteCommand)
