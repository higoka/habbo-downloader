const { fetchText, fetchMany } = require('../../functions')
const { config, parseXml } = require('../../utils')

async function parse (txt) {
  const all = await parseXml(txt)
  const map = []

  all.map.lib.forEach((item) => {
    const name = item['@_id'].toLowerCase()
    map.push(
      { revision: item['@_revision'], name: name },
      { revision: item['@_revision'], name: `${name}.manifest` },
    )
  })

  return new Set(map)
}

async function handle () {
  const conf = await config()

  const txt = await fetchText(`https://images.habbo.com/gordon/${conf.prod}/figuremap.xml`)
  const all = await parse(txt)

  await fetchMany([...all].map((item) => {
    return {
      src: `https://images.habbo.com/habbo-asset-bundles/production/2019.3.9f1/Content/WebGL/${item.revision}/${item.name}`,
      dst: (conf.revision)
        ? `resource/unity/clothes/${item.revision}/${item.name}`
        : `resource/unity/clothes/${item.name}`
    }
  }))
}

module.exports = handle
