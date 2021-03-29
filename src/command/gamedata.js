const { fetchMany } = require('../functions')
const { config } = require('../utils')

async function handle () {
  const conf = await config()
  await fetchMany([
    { src: `https://www.habbo.${conf.domain}/gamedata/external_variables/0`, dst: 'resource/gamedata/external_variables.txt' },
    { src: `https://www.habbo.${conf.domain}/gamedata/external_flash_texts/0`, dst: 'resource/gamedata/external_flash_texts.txt' },
    { src: `https://www.habbo.${conf.domain}/gamedata/override/external_override_variables/0`, dst: 'resource/gamedata/override/external_override_variables.txt' },
    { src: `https://www.habbo.${conf.domain}/gamedata/override/external_flash_override_texts/0`, dst: 'resource/gamedata/override/external_flash_override_texts.txt' },
    { src: `https://www.habbo.${conf.domain}/gamedata/furnidata_json/0`, dst: 'resource/gamedata/furnidata.json' },
    { src: `https://www.habbo.${conf.domain}/gamedata/furnidata_xml/0`, dst: 'resource/gamedata/furnidata.xml' },
    { src: `https://www.habbo.${conf.domain}/gamedata/furnidata/0`, dst: 'resource/gamedata/furnidata.txt' },
    { src: `https://www.habbo.${conf.domain}/gamedata/productdata_json/0`, dst: 'resource/gamedata/productdata.json' },
    { src: `https://www.habbo.${conf.domain}/gamedata/productdata_xml/0`, dst: 'resource/gamedata/productdata.xml' },
    { src: `https://www.habbo.${conf.domain}/gamedata/productdata/0`, dst: 'resource/gamedata/productdata.txt' },
    { src: `https://www.habbo.${conf.domain}/gamedata/figuredata/0`, dst: 'resource/gamedata/figuredata.xml' },
    { src: `https://images.habbo.com/gordon/${conf.prod}/figuremap.xml`, dst: 'resource/gamedata/figuremap.xml' },
    { src: `https://images.habbo.com/gordon/${conf.prod}/effectmap.xml`, dst: 'resource/gamedata/effectmap.xml' },
  ], true)
}

module.exports = handle
