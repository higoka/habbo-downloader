const { fetchUntil } = require('../functions')

async function handle () {
  await fetchUntil({
    src: 'https://images.habbo.com/c_images/catalogue/icon_%i%.png',
    dst: 'c_images/catalogue/icon_%i%.png',
  })
}

module.exports = handle
