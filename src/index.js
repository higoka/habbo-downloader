const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// const handle = require('./command/icon')
// const { fetchMany } = require('./functions')

function main () {
  console.log(` _____     _   _`)
  console.log(`|  |  |___| |_| |_ ___`)
  console.log(`|     | .'| . | . | . |`)
  console.log(`|__|__|__,|___|___|___|          _            ___   ___`)
  console.log(`|    \\ ___ _ _ _ ___| |___ ___ _| |___ ___   |_  | |   |`)
  console.log(`|  |  | . | | | |   | | . | .'| . | -_|  _|  |  _|_| | |`)
  console.log(`|____/|___|_____|_|_|_|___|__,|___|___|_|    |___|_|___|\n`)

  rl.question('Enter Command: ', async (command) => {
      await require(`./command/${command}`)()
      console.log('done')
  })
}

main()
