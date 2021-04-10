const { fetchText, fetchMany } = require('../functions')

const regex = /web_promo_small\/([^;]+)/gmi

async function parse (txt) {
  const match = [
    ...txt.matchAll(regex),
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
    domain.map((d) => fetchText(`https://www.habbo.${d}/gamedata/external_variables/0`))
  )

  return all.map((txt) => txt.value).join()
}

async function handle () {
  const txt = await collectText()
  const all = await parse(txt)

  await fetchMany([...all].map((image) => {
    return {
      src: `https://images.habbo.com/c_images/web_promo_small/${image}`,
      dst: `c_images/web_promo_small/${image}`
    }
  }))
}

module.exports = handle
