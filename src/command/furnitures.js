const { fetchText, fetchMany } = require('../functions')
const { parseXml, config } = require('../utils')

async function parse (txt) {
  const data = await parseXml(txt)
  const all = [
    ...data.furnidata.roomitemtypes.furnitype,
    ...data.furnidata.wallitemtypes.furnitype,
  ]

  const map = []

  all.forEach((item) => {
    map.push(
      { revision: item.revision, name: `${item['@_classname'].replace('*', '_')}_icon.png` },
      { revision: item.revision, name: `${item['@_classname'].split('*')[0]}.swf` },
    )
  })

  return new Set(map)
}

async function handle () {
  const conf = await config()

  const txt = await fetchText(`https://www.habbo.${conf.domain}/gamedata/furnidata_xml/0`)
  const all = await parse(txt)

  await fetchMany([...all].map((item) => {
    return {
      src: `https://images.habbo.com/dcr/hof_furni/${item.revision}/${item.name}`,
      dst: (conf.revision)
        ? `resource/dcr/hof_furni/${item.revision}/${item.name}`
        : `resource/dcr/hof_furni/${item.name}`
    }
  }))
}

module.exports = handle
