import { DiscordEvent } from '../types'
import { interactionCreate } from './interactionCreate.js'
import { ready } from './ready.js'

export const events: DiscordEvent<any>[] = [ready, interactionCreate]
