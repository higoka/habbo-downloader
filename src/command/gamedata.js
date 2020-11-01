const { fetchMany } = require('../functions')
const { getProduction } = require('../utils')

async function handle () {
  const prod = getProduction()
  await fetchMany([
    { src: 'https://www.habbo.com/gamedata/external_variables/0', dst: 'resource/gamedata/external_variables.txt' },
    { src: 'https://www.habbo.com/gamedata/external_flash_texts/0', dst: 'resource/gamedata/external_flash_texts.txt' },
    { src: 'https://www.habbo.com/gamedata/override/external_override_variables/0', dst: 'resource/gamedata/override/external_override_variables.txt' },
    { src: 'https://www.habbo.com/gamedata/override/external_flash_override_texts/0', dst: 'resource/gamedata/override/external_flash_override_texts.txt' },
    { src: 'https://www.habbo.com/gamedata/furnidata_xml/0', dst: 'resource/gamedata/furnidata.xml' },
    { src: 'https://www.habbo.com/gamedata/furnidata/0', dst: 'resource/gamedata/furnidata.txt' },
    { src: 'https://www.habbo.com/gamedata/productdata_xml/0', dst: 'resource/gamedata/productdata.xml' },
    { src: 'https://www.habbo.com/gamedata/productdata/0', dst: 'resource/gamedata/productdata.txt' },
    { src: 'https://www.habbo.com/gamedata/figuredata/0', dst: 'resource/gamedata/figuredata.xml' },
    { src: `https://images.habbo.com/gordon/${prod}/figuremap.xml`, dst: 'resource/gamedata/figuremap.xml' },
    { src: `https://images.habbo.com/gordon/${prod}/effectmap.xml`, dst: 'resource/gamedata/effectmap.xml' },
  ])
}

module.exports = handle
