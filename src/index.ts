console.clear()
const chalk = require("chalk")
console.log(chalk.red.bold("\x1b[32m========================================\x1b[0m"))
console.log(chalk.blue.bold("\x1b[36m        Baileys Mod Loaded              \x1b[0m"))
console.log(chalk.green.bold("\x1b[35m        Initializing Socket...         \x1b[0m"))
console.log(chalk.yellow.bold("\x1b[32m========================================\x1b[0m"))

import makeWASocket from './Socket/index'

export * from '../WAProto/index.js'
export * from './Utils/index'
export * from './Types/index'
export * from './Defaults/index'
export * from './WABinary/index'
export * from './WAM/index'
export * from './WAUSync/index'

export type WASocket = ReturnType<typeof makeWASocket>
export { makeWASocket }
export default makeWASocket
