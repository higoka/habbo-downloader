const { fetchOne } = require('../functions')

async function handle () {
  let failed = 0
  let i = 1

  while (failed < 3) {
    try {
      const msg = await fetchOne(`https://images.habbo.com/c_images/catalogue/icon_${i}.png`, `resource/c_images/catalogue/icon_${i}.png`)
      failed = 0
      console.log(msg)
    } catch (err) {
      console.log(err.message)
      failed++
    }
    i++
  }
}

module.exports = handle
