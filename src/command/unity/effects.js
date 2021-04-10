const { fetchText, fetchMany, parseXml, config } = require('../../functions')

async function parse (txt) {
  const all = await parseXml(txt)
  const map = []

  all.map.effect.forEach((item) => {
    const name = item['@_lib'].toLowerCase()
    map.push(
      { revision: item['@_revision'], name: name },
      { revision: item['@_revision'], name: `${name}.manifest` },
    )
  })

  return new Set(map)
}

async function handle () {
  const txt = await fetchText(`https://images.habbo.com/gordon/${config.prod}/effectmap.xml`)
  const all = await parse(txt)

  await fetchMany([...all].map((item) => {
    return {
      src: `https://images.habbo.com/habbo-asset-bundles/production/2019.3.9f1/Content/WebGL/${item.revision}/${item.name}`,
      dst: (config.revision)
        ? `unity/effects/${item.revision}/${item.name}`
        : `unity/effects/${item.name}`
    }
  }))
}

module.exports = handle
