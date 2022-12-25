import dotenv from 'dotenv'

dotenv.config()

export const DISCORD_TOKEN = process.env.DISCORD_TOKEN ?? 'token'
export const TARGET_USER_ID = process.env.TARGET_USER_ID ?? 'userId'
export const MESSAGE_QUANTITY_MULTIPLIER =
  process.env.MESSAGE_QUANTITY_MULTIPLIER ?? 1
