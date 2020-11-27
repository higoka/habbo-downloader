const { fetchOne } = require('../functions')
const { config } = require('../utils')

async function handle () {
  const prod = await config('prod')

  fetchOne(`https://images.habbo.com/gordon/${prod}/Habbo.swf`, `resource/gordon/${prod}/Habbo.swf`)
    .then(console.log)
    .catch((err) => console.log(err.message))
}

module.exports = handle
