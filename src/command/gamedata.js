const { fetchMany, config } = require('../functions')

async function handle () {
  await fetchMany([
    { src: `https://www.habbo.${config.domain}/gamedata/external_variables/0`, dst: 'gamedata/external_variables.txt' },
    { src: `https://www.habbo.${config.domain}/gamedata/external_flash_texts/0`, dst: 'gamedata/external_flash_texts.txt' },
    { src: `https://www.habbo.${config.domain}/gamedata/override/external_override_variables/0`, dst: 'gamedata/override/external_override_variables.txt' },
    { src: `https://www.habbo.${config.domain}/gamedata/override/external_flash_override_texts/0`, dst: 'gamedata/override/external_flash_override_texts.txt' },
    { src: `https://www.habbo.${config.domain}/gamedata/furnidata_json/0`, dst: 'gamedata/furnidata.json' },
    { src: `https://www.habbo.${config.domain}/gamedata/furnidata_xml/0`, dst: 'gamedata/furnidata.xml' },
    { src: `https://www.habbo.${config.domain}/gamedata/furnidata/0`, dst: 'gamedata/furnidata.txt' },
    { src: `https://www.habbo.${config.domain}/gamedata/productdata_json/0`, dst: 'gamedata/productdata.json' },
    { src: `https://www.habbo.${config.domain}/gamedata/productdata_xml/0`, dst: 'gamedata/productdata.xml' },
    { src: `https://www.habbo.${config.domain}/gamedata/productdata/0`, dst: 'gamedata/productdata.txt' },
    { src: `https://www.habbo.${config.domain}/gamedata/figuredata/0`, dst: 'gamedata/figuredata.xml' },
    { src: `https://images.habbo.com/gordon/${config.prod}/figuremap.xml`, dst: 'gamedata/figuremap.xml' },
    { src: `https://images.habbo.com/gordon/${config.prod}/effectmap.xml`, dst: 'gamedata/effectmap.xml' },
  ], true)
}

module.exports = handle
