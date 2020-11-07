const { fetchText, fetchMany } = require('../functions')
const { parseXml } = require('../utils')

async function parse (txt) {
  const all = await parseXml(txt)
  const combined = [
    ...all.furnidata.roomitemtypes.furnitype,
    ...all.furnidata.wallitemtypes.furnitype,
  ]

  const map = {}

  combined.forEach((item) => {
    const name = item['@_classname'].split('*')[0]
    map[name] = { name: name, revision: item.revision }
  })

  return Object.values(map)
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
