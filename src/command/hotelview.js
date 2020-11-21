const { fetchMany, fetchText } = require('../functions')
const { config } = require('../utils')

const regex = /(?<=landing\.view\.background.+=).+(?<=reception\/)(.+)/gmi

async function parse (txt) {
  const all = [
    ...txt.matchAll(regex)
  ]

  return all.map((match) => match[1].trim())
}

async function handle () {
  const domain = await config('domain')

  const txt = await fetchText(`https://www.habbo.${domain}/gamedata/external_variables/0`)
  const all = await parse(txt)

  await fetchMany([...all].map((item) => {
    return {
      src: `https://images.habbo.com/c_images/reception/${item}`,
      dst: `resource/c_images/reception/${item}`
    }
  }))
}

module.exports = handle
