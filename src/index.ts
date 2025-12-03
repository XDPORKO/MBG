import chalk from 'chalk'
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

// Fungsi center text
function centerText(text) {
  const width = process.stdout.columns || 80
  const lines = text.split('\n')
  return lines
    .map(line => {
      const pad = Math.max(0, Math.floor((width - line.length) / 2))
      return ' '.repeat(pad) + line
    })
    .join('\n')
}

const logoSmall = `
██████╗  █████╗ ██╗██╗     
██╔══██╗██╔══██╗██║██║     
██████╔╝███████║██║██║     
██╔══██╗██╔══██║██║██║     
██████╔╝██║  ██║██║███████╗
╚═════╝ ╚═╝  ╚═╝╚═╝╚══════╝
`

// Loading effect
async function loadingEffect() {
  const frames = ['⠋','⠙','⠹','⠸','⠼','⠴','⠦','⠧','⠇','⠏']
  let count = 0

  return new Promise(resolve => {
    const interval = setInterval(() => {
      process.stdout.write(
        chalk.yellow(`\r${centerText(`Loading ${frames[count % frames.length]}`)}`)
      )
      count++
      if (count >= 50) {
        clearInterval(interval)
        process.stdout.write('\r')
        resolve()
      }
    }, 80)
  })
}

async function startTerminal() {
  await loadingEffect()

  console.log(chalk.greenBright(centerText(logoSmall)))
  console.log(chalk.cyan(centerText('Baileys Modded By Rapp.')))
}

startTerminal()