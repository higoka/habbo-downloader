const { fetchText, fetchMany } = require('../functions')
const { getProduction, parseXml } = require('../utils')

const prod = getProduction()

async function parse (txt) {
  const all = await parseXml(txt)
  return new Set(
    all.map.lib.map((item) => item['@_id'])
  )
}

async function handle () {
  const txt = await fetchText(`https://images.habbo.com/gordon/${prod}/figuremap.xml`)
  const all = await parse(txt)

  await fetchMany([...all].map((item) => {
    return {
      src: `https://images.habbo.com/gordon/${prod}/${item}.swf`,
      dst: `resource/gordon/${prod}/${item}.swf`
    }
  }))
}

module.exports = handle
