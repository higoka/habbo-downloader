const { fetchText, fetchMany } = require('../functions')
const parser = require('fast-xml-parser')

const opt = {
  ignoreAttributes: false,
  parseAttributeValue: false,
  parseNodeValue: false,
}

async function parse (txt) {
  if (parser.validate(txt) !== true) {
    throw new Error('invalid xml')
  }

  const all = {}
  const data = parser.parse(txt, opt)
  const combined = [
    ...data.furnidata.roomitemtypes.furnitype,
    ...data.furnidata.wallitemtypes.furnitype,
  ]

  combined.forEach((item) => {
    const name = item['@_classname'].split('*')[0]
    all[name] = { name: name, revision: item.revision }
  })

  return Object.values(all)
}

async function handle () {
  const txt = await fetchText('https://www.habbo.com/gamedata/furnidata_xml/0')
  const all = await parse(txt)

  await fetchMany([...all].map((item) => {
    return {
      src: `https://images.habbo.com/dcr/hof_furni/${item.revision}/${item.name}.swf`,
      dst: `resource/dcr/hof_furni/${item.revision}/${item.name}.swf`
    }
  }))
}

module.exports = handle
