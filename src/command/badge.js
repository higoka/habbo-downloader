const { fetchText, fetchMany } = require('../functions')

const regexOne = /badge_(?:name|desc)_([^=]+)/gmi
const regexTwo = /(.*)_badge_(?:name|desc).*=/gmi

async function parse (txt) {
  const match = [
    ...txt.matchAll(regexOne),
    ...txt.matchAll(regexTwo),
  ]

  return new Set(
    match.map((match) => match[1].trim())
  )
}

async function handle () {
  const txt = await fetchText('https://www.habbo.com/gamedata/external_flash_texts/0')
  const all = await parse(txt)

  await fetchMany([...all].map((code) => {
    return {
      src: `https://images.habbo.com/c_images/album1584/${code}.png`,
      dst: `resource/c_images/album1584/${code}.png`
    }
  }))
}

module.exports = handle
