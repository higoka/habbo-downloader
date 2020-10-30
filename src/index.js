const { fetchRaw, fetchOne, fetchMany } = require('./functions')

async function badge () {
  const text = await fetchRaw('https://www.habbo.com/gamedata/external_flash_texts/0')
  const matches = [...text.matchAll(/(?<=badge_(name|desc)_)[^=]+/gi)]

  const map = []

  matches.forEach((match) => {
    const code = match[0].trim()
    map.push({
      src: `https://images.habbo.com/c_images/album1584/${code}.png`,
      dst: `resource/c_images/album1584/${code}.png`,
    })
  })

  await fetchMany(map)
}

async function main () {
  try {
    console.log('TEST > badge download - fetchMany')
    await badge()

    // console.log('TEST > fetchOne')
    // await fetchOne('https://images.habbo.com/dcr/hof_furni/61856/shelves_norja.swf', 'resource/dcr/hof_furni/shelves_norja.swf')

    // console.log('TEST > fetchMany')
    // await fetchMany([
    //   { src: 'https://images.habbo.com/dcr/hof_furni/61856/couch_norja.swf', dst: 'resource/dcr/hof_furni/couch_norja.swf' },
    //   { src: 'https://images.habbo.com/c_images/album1584/ADM.png', dst: 'resource/c_images/album1584/ADM.png' },
    //   { src: 'https://images.habbo.com/c_images/album1584/VIP.gif', dst: 'resource/c_images/album1584/VIP.gif' },
    //   { src: 'https://images.habbo.com/c_images/catalogue/icon_1.png', dst: 'resource/c_images/catalogue/icon_1.png' },
    //   { src: 'https://images.habbo.com/c_images/catalogue/icon_200.png', dst: 'resource/c_images/catalogue/icon_200.png' },
    // ])

    console.log('done')
  } catch (err) {
    console.error(err.message)
  }
}

main()
