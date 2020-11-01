const { fetchText, fetchMany } = require('../functions')
const { getProduction } = require('../util')
const parser = require('fast-xml-parser')

const prod = getProduction()
const opt = {
  ignoreAttributes: false,
  parseAttributeValue: false,
  parseNodeValue: false,
}

async function parse (txt) {
  if (parser.validate(txt) !== true) {
    throw new Error('invalid xml')
  }

  const all = parser.parse(txt, opt)

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
