const { fetchUntil } = require('../functions')

async function handle () {
  await fetchUntil({
    src: 'https://images.habbo.com/dcr/hof_furni/mp3/sound_machine_sample_%i%.mp3',
    dst: 'dcr/hof_furni/mp3/sound_machine_sample_%i%.mp3',
  })
}

module.exports = handle
