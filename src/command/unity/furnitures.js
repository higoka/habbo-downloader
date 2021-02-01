const { fetchMany, fetchJson } = require('../../functions')
const { config } = require('../../utils')

async function parse (json) {
  const all = [
    ...json.roomitemtypes.furnitype,
    ...json.wallitemtypes.furnitype,
  ]

  const map = []

  all.forEach((item) => {
    const name = item.classname.split('*')[0].toLowerCase()
    map.push(
      { revision: item.revision, name: `${name}` },
      { revision: item.revision, name: `${name}.manifest` },
    )
  })

  return new Set(map)
}

async function handle () {
  const conf = await config()

  const json = await fetchJson(`https://www.habbo.${conf.domain}/gamedata/furnidata_json/0`)
  const all = await parse(json)

  await fetchMany([...all].map((item) => {
    return {
      src: `https://images.habbo.com/habbo-asset-bundles/production/2019.3.9f1/Furni/WebGL/${item.revision}/${item.name}`,
      dst: (conf.revision)
        ? `resource/unity/furni/${item.revision}/${item.name}`
        : `resource/unity/furni/${item.name}`
    }
  }))
}

module.exports = handle
