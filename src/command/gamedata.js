const { fetchMany } = require('../functions')
const { getProduction, getDomain } = require('../utils')

async function handle () {
  const prod = await getProduction()
  const domain = await getDomain()

  await fetchMany([
    { src: `https://www.habbo.${domain}/gamedata/external_variables/0`, dst: 'resource/gamedata/external_variables.txt' },
    { src: `https://www.habbo.${domain}/gamedata/external_flash_texts/0`, dst: 'resource/gamedata/external_flash_texts.txt' },
    { src: `https://www.habbo.${domain}/gamedata/override/external_override_variables/0`, dst: 'resource/gamedata/override/external_override_variables.txt' },
    { src: `https://www.habbo.${domain}/gamedata/override/external_flash_override_texts/0`, dst: 'resource/gamedata/override/external_flash_override_texts.txt' },
    { src: `https://www.habbo.${domain}/gamedata/furnidata_xml/0`, dst: 'resource/gamedata/furnidata.xml' },
    { src: `https://www.habbo.${domain}/gamedata/furnidata/0`, dst: 'resource/gamedata/furnidata.txt' },
    { src: `https://www.habbo.${domain}/gamedata/productdata_xml/0`, dst: 'resource/gamedata/productdata.xml' },
    { src: `https://www.habbo.${domain}/gamedata/productdata/0`, dst: 'resource/gamedata/productdata.txt' },
    { src: `https://www.habbo.${domain}/gamedata/figuredata/0`, dst: 'resource/gamedata/figuredata.xml' },
    { src: `https://images.habbo.com/gordon/${prod}/figuremap.xml`, dst: 'resource/gamedata/figuremap.xml' },
    { src: `https://images.habbo.com/gordon/${prod}/effectmap.xml`, dst: 'resource/gamedata/effectmap.xml' },
  ])
}

module.exports = handle
