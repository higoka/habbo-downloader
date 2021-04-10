const { fetchText, fetchMany, parseXml, config } = require('../functions')

async function parse (txt) {
  const all = await parseXml(txt)
  return new Set(
    all.map.effect.map((item) => item['@_lib'])
  )
}

async function handle () {
  const txt = await fetchText(`https://images.habbo.com/gordon/${config.prod}/effectmap.xml`)
  const all = await parse(txt)

  await fetchMany([...all].map((item) => {
    return {
      src: `https://images.habbo.com/gordon/${config.prod}/${item}.swf`,
      dst: `gordon/${config.prod}/${item}.swf`
    }
  }))
}

module.exports = handle
