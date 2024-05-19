const { fetchMany, config, collectAllTexts } = require('../functions')

const regexOne = /^badge_(?:name|desc)_([^=]+)=/gmi
const regexTwo = /^(.*)_badge_(?:name|desc).*=/gmi

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
  const txt = await collectAllTexts()
  const all = await parse(txt)

  await fetchMany([...all].map((code) => {
    return {
      src: `https://images.habbo.com/c_images/album1584/${code}.${config.format}`,
      dst: `c_images/album1584/${code}.${config.format}`
    }
  }))
}

module.exports = handle
