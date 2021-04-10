const { fetchMany, fetchJson, config } = require('../../functions')

async function parse (json) {
  const all = [
    ...json.roomitemtypes.furnitype,
    ...json.wallitemtypes.furnitype,
  ]

  const map = []

  all.forEach((item) => {
    const name = item.classname.split('*')[0].toLowerCase()
    map.push(
      { revision: item.revision, name: name },
      { revision: item.revision, name: `${name}.manifest` },
    )
  })

  return new Set(map)
}

async function handle () {
  const json = await fetchJson(`https://www.habbo.${config.domain}/gamedata/furnidata_json/0`)
  const all = await parse(json)

  await fetchMany([...all].map((item) => {
    return {
      src: `https://images.habbo.com/habbo-asset-bundles/production/2019.3.9f1/Furni/WebGL/${item.revision}/${item.name}`,
      dst: (config.revision)
        ? `unity/furnitures/${item.revision}/${item.name}`
        : `unity/furnitures/${item.name}`
    }
  }))
}

module.exports = handle
