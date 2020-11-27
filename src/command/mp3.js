const { fetchOne } = require('../functions')

async function handle () {
  let failed = 0
  let i = 1

  while (failed < 3) {
    try {
      const msg = await fetchOne(`https://images.habbo.com/dcr/hof_furni/mp3/sound_machine_sample_${i}.mp3`, `resource/dcr/hof_furni/mp3/sound_machine_sample_${i}.mp3`)
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
