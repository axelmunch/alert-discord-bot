# Alert Discord Bot

Alert is a Discord bot that sends direct messages as alerts to a user.

[Discord Developer Portal](https://discord.com/developers)\
[Discord.js Documentation](https://discord.js.org)\
[Discord.js Guide](https://discordjs.guide)

## Discord slash commands

- `/ping` : Test the bot's latency.
- `/alert {message}` : Send an alert to the target user.
- `/delete {limit}` : Delete messages with the target user.

## Requirements

- [Node.js](https://nodejs.org/) >= 18.0.0
- [npm](https://www.npmjs.com/) >= 8.0.0

## Installation

```sh
# Configure environment variables
cp .env.example .env

# Install
npm install
```

## Usage

```sh
# Run Discord bot
npm run build
npm run start

# Register commands for the bot
npm run discord:register-commands <userId>
```

Discord prerequisites:
- The bot must be in a mutual server with the target user.
- The user must allow direct messages from server members.
- <u>**Warning:**</u> This bot is not recommended for public servers as it may spam the target user.

## Environment variables

- `DISCORD_TOKEN` : The bot token.
- `TARGET_USER_ID` : The target user ID.
- `MESSAGE_QUANTITY_MULTIPLIER` : Will send this number of times the alert to the target user.

## Scripts

`npm run` scripts :
- `build` : Compile TypeScript files.
- `start` : Start the Discord bot.
- `discord:register-commands` : Register all commands to the Discord API.
  - Parameters:
  - `<userId>` : The bot user ID.
  - `[guildId]` : Register commands only in one guild.
- `discord:unregister-command` : Unregister a command from the Discord API.
  - Parameters:
  - `<userId>` : The bot user ID.
  - `<commandId>` : The command ID.
  - `[guildId]` : Unregister command only in one guild.
- `discord:unregister-commands` : Unregister all commands from the Discord API.
  - Parameters:
  - `<userId>` : The bot user ID.
  - `[guildId]` : Unregister commands only in one guild.
