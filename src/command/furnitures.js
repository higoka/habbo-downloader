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
      `${item.revision}/${item['@_classname'].split('*')[0]}.swf`,
      `${item.revision}/${item['@_classname'].replace('*', '_')}_icon.png`,
    )
  })

  return new Set(map)
}

async function handle () {
  const domain = await config('domain')

  const txt = await fetchText(`https://www.habbo.${domain}/gamedata/furnidata_xml/0`)
  const all = await parse(txt)

  await fetchMany([...all].map((item) => {
    return {
      src: `https://images.habbo.com/dcr/hof_furni/${item}`,
      dst: `resource/dcr/hof_furni/${item}`
    }
  }))
}

module.exports = handle
