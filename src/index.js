const { fetchOne, fetchMany } = require('./functions')

async function main () {
  try {
    console.log('TEST > fetchOne')
    await fetchOne('https://images.habbo.com/dcr/hof_furni/61856/shelves_norja.swf', 'resource/dcr/hof_furni/shelves_norja.swf')

    console.log('TEST > fetchMany')
    await fetchMany([
      { src: 'https://images.habbo.com/dcr/hof_furni/61856/couch_norja.swf', dst: 'resource/dcr/hof_furni/couch_norja.swf' },
      { src: 'https://images.habbo.com/c_images/album1584/ADM.png', dst: 'resource/c_images/album1584/ADM.png' },
      { src: 'https://images.habbo.com/c_images/album1584/VIP.gif', dst: 'resource/c_images/album1584/VIP.gif' },
      { src: 'https://images.habbo.com/c_images/catalogue/icon_1.png', dst: 'resource/c_images/catalogue/icon_1.png' },
      { src: 'https://images.habbo.com/c_images/catalogue/icon_200.png', dst: 'resource/c_images/catalogue/icon_200.png' },
    ])

    console.log('done')
  } catch (err) {
    console.error(err)
  }
}

main()
