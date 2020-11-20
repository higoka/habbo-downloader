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
      src: `https://images.habbo.com/habbo-asset-bundles/dev/2019.3.9f1/Furni/WebGL/${item.revision}/${item.name}`,
      dst: `resource20/dcr/hof_furni/${item.revision}/${item.name}`
    }
  }))

  await fetchMany([...all].map((item) => {
    return {
      src: `https://images.habbo.com/habbo-asset-bundles/dev/2019.3.9f1/Furni/WebGL/${item.revision}/${item.name}.manifest`,
      dst: `resource20/dcr/hof_furni/${item.revision}/${item.name}.manifest`
    }
  }))


}

module.exports = handle
