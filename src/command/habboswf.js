const { fetchOne, config } = require('../functions')

async function handle () {
  fetchOne(`https://images.habbo.com/gordon/${config.prod}/Habbo.swf`, `gordon/${config.prod}/Habbo.swf`)
    .then(console.log)
    .catch((err) => console.log(err.message))
}

module.exports = handle
