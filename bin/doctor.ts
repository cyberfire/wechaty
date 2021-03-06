#!/usr/bin/env node
/**
 * Wechaty - Wechat for Bot. Connecting ChatBots
 *
 * Licenst: ISC
 * https://github.com/wechaty/wechaty
 *
 */

import * as os from 'os'

import {
    Config
}                   from '../src/config'
import { Wechaty }  from '../src/wechaty'

const wechaty = Wechaty.instance()

console.log(`
#### Wechaty Doctor

1. Wechaty version: ${wechaty.version()}
2. ${os.type()} ${os.arch()} version ${os.release()} memory ${Math.floor(os.freemem() / 1024 / 1024)}/${Math.floor(os.totalmem() / 1024 / 1024)} MB
3. Docker: ${Config.isDocker}
4. Node version: ${process.version}

`)
