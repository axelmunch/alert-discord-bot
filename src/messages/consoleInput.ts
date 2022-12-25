import * as readline from 'readline'
import { sendAlertMessageToTarget } from './sendAlertMessageToTarget.js'
import { DiscordClient } from '../DiscordClient.js'

const rl = readline.createInterface(process.stdin, process.stdout)

export const consoleInput = async () => {
  rl.on('line', (input) => {
    if (input.length > 0) {
      rl.question(
        `Send "${input}" to the target user [y/N]? `,
        async (answer) => {
          switch (answer.toLowerCase()) {
            case 'y':
              sendAlertMessageToTarget(await DiscordClient.getInstance(), input)
              break
            case 'yes':
              sendAlertMessageToTarget(await DiscordClient.getInstance(), input)
              break
            default:
              console.log()
          }
        }
      )
    }
  })
}
