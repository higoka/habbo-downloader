const { fetchText, fetchMany, config } = require('../functions')

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

async function collectText () {
  const domain = [
    'com.br', 'com.tr', 'com',
    'de', 'es', 'fi',
    'fr', 'it', 'nl'
  ]

  const all = await Promise.allSettled(
    domain.map((d) => fetchText(`https://www.habbo.${d}/gamedata/external_flash_texts/0`))
  )

  return all.map((txt) => txt.value).join()
}

async function handle () {
  const txt = await collectText()
  const all = await parse(txt)

  await fetchMany([...all].map((code) => {
    return {
      src: `https://images.habbo.com/c_images/album1584/${code}.${config.format}`,
      dst: `c_images/album1584/${code}.${config.format}`
    }
  }))
}

module.exports = handle
