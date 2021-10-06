import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import {ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'leave',
            description: 'Leaves the group',
            category: 'dev',
            dm: true,
            usage: `${client.config.prefix}leave`,
            modsOnly: true,
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        await M.reply(`*Goodbye* 👋`)
        await this.client.groupLeave(M.from).catch(()=> M.reply('Failed to leave the Group'))
    }
}
