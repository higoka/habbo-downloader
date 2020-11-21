const cows = require('cows')

async function handle () {
  const c = cows()
  const i = Math.floor(Math.random() * c.length)

  console.log(c[i])
}

module.exports = handle
