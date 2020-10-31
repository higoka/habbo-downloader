const handle = require('./command/badge')

async function main () {
  await handle()
  console.log('done')
}

main()
