const { fetchText, fetchMany } = require('../functions')
const { config } = require('../utils')

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
  const conf = await config()

  const txt = await fetchText(`https://www.habbo.${conf.domain}/gamedata/external_flash_texts/0`)
  const all = await parse(txt)

  await fetchMany([...all].map((code) => {
    return {
      src: `https://images.habbo.com/c_images/album1584/${code}.png`,
      dst: `resource/c_images/album1584/${code}.png`
    }
  }))
}

module.exports = handle
