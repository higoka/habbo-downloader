const { fetchMany, fetchJson, config } = require('../functions')

async function parse (json) {
  const all = await applyAliases([
    ...json.roomitemtypes.furnitype,
    ...json.wallitemtypes.furnitype,
  ])

  const map = []

  all.forEach((item) => {
    map.push(
      { revision: item.revision, name: `${item.classname.replace('*', '_')}_icon.png` },
      { revision: item.revision, name: `${item.classname.split('*')[0]}.swf` },
    )
  })

  return new Set(map)
}

async function applyAliases(items) {
  const aliases = [
    [ 'poster26', 'poster' ],
    [ 'poster27', 'poster' ],
    [ 'poster28', 'poster' ],
    [ 'poster29', 'poster' ],
    [ 'poster2', 'poster' ],
    [ 'poster30', 'poster' ],
    [ 'poster31', 'poster' ],
    [ 'poster32', 'poster' ],
    [ 'poster33', 'poster' ],
    [ 'poster34', 'poster' ],
    [ 'poster35', 'poster' ],
    [ 'poster36', 'poster' ],
    [ 'poster37', 'poster' ],
    [ 'poster38', 'poster' ],
    [ 'poster39', 'poster' ],
    [ 'poster3', 'poster' ],
    [ 'poster40', 'poster' ],
    [ 'poster41', 'poster' ],
    [ 'poster42', 'poster' ],
    [ 'poster43', 'poster' ],
    [ 'poster44', 'poster' ],
    [ 'poster45', 'poster' ],
    [ 'poster46', 'poster' ],
    [ 'poster47', 'poster' ],
    [ 'poster48', 'poster' ],
    [ 'poster49', 'poster' ],
    [ 'poster4', 'poster' ],
    [ 'poster500', 'poster' ],
    [ 'poster501', 'poster' ],
    [ 'poster502', 'poster' ],
    [ 'poster503', 'poster' ],
    [ 'poster504', 'poster' ],
    [ 'poster505', 'poster' ],
    [ 'poster506', 'poster' ],
    [ 'poster507', 'poster' ],
    [ 'poster508', 'poster' ],
    [ 'poster509', 'poster' ],
    [ 'poster50', 'poster' ],
    [ 'poster510', 'poster' ],
    [ 'poster511', 'poster' ],
    [ 'poster512', 'poster' ],
    [ 'poster513', 'poster' ],
    [ 'poster514', 'poster' ],
    [ 'poster515', 'poster' ],
    [ 'poster516', 'poster' ],
    [ 'poster517', 'poster' ],
    [ 'poster518', 'poster' ],
    [ 'poster51', 'poster' ],
    [ 'poster520', 'poster' ],
    [ 'poster521', 'poster' ],
    [ 'poster522', 'poster' ],
    [ 'poster523', 'poster' ],
    [ 'poster52', 'poster' ],
    [ 'poster53', 'poster' ],
    [ 'poster54', 'poster' ],
    [ 'poster55', 'poster' ],
    [ 'poster56', 'poster' ],
    [ 'poster57', 'poster' ],
    [ 'poster58', 'poster' ],
    [ 'poster5', 'poster' ],
    [ 'poster6', 'poster' ],
    [ 'poster7', 'poster' ],
    [ 'poster8', 'poster' ],
    [ 'poster9', 'poster' ],
    [ 'footylamp_campaign_ing', 'footylamp' ],
    [ 'easy_bowl', 'easy_bowl2' ],
    [ 'ads_cllava', 'ads_cllava2' ],
    [ 'rare_icecream_campaign2', 'rare_icecream_campaign' ],
    [ 'calippo_cmp', 'calippo' ],
    [ 'igor_seatcmp', 'igor_seat' ],
    [ 'ads_711c', 'ads_711' ],
    [ 'ads_cltele_cmp', 'ads_cltele' ],
    [ 'ads_ob_pillowcmp', 'ads_ob_pillow' ],
    [ 'ads_711shelfcmp', 'ads_711shelf' ],
    [ 'ads_frankbcmp', 'ads_frankb' ],
    [ 'ads_grefusa_cactus_camp', 'ads_grefusa_cactus' ],
    [ 'ads_cl_jukeb_camp', 'ads_cl_jukeb' ],
    [ 'ads_reebok_block2cmp', 'ads_reebok_block2' ],
    [ 'ads_cl_sofa_cmp', 'ads_cl_sofa' ],
    [ 'ads_calip_colac', 'ads_calip_cola' ],
    [ 'ads_calip_chaircmp', 'ads_calip_chair' ],
    [ 'ads_calip_pool_cmp', 'ads_calip_pool' ],
    [ 'ads_calip_telecmp', 'ads_calip_tele' ],
    [ 'ads_calip_parasol_cmp', 'ads_calip_parasol' ],
    [ 'ads_calip_lava2', 'ads_calip_lava' ],
    [ 'ads_calip_fan_cmp', 'ads_calip_fan' ],
    [ 'ads_oc_soda_cmp', 'ads_oc_soda' ],
    [ 'ads_1800tele_cmp', 'ads_1800tele' ],
    [ 'ads_spang_sleep_cmp', 'ads_spang_sleep' ],
    [ 'ads_cl_moodi_camp', 'ads_cl_moodi' ],
    [ 'ads_droetker_paula_cmp', 'ads_droetker_paula' ],
    [ 'ads_chups_camp', 'ads_chups' ],
    [ 'garden_seed_cmp', 'garden_seed' ],
    [ 'ads_grefusa_yum_camp', 'ads_grefusa_yum' ],
    [ 'ads_cheetos_camp', 'ads_cheetos' ],
    [ 'ads_chocapic_camp', 'ads_chocapic' ],
    [ 'ads_capri_chair_camp', 'ads_capri_chair' ],
    [ 'ads_capri_lava_camp', 'ads_capri_lava' ],
    [ 'ads_capri_arcade_camp', 'ads_capri_arcade' ],
    [ 'ads_pepsi0_camp', 'ads_pepsi0' ],
    [ 'ads_cheetos_hotdog_camp', 'ads_cheetos_hotdog' ],
    [ 'ads_cheetos_bath_camp', 'ads_cheetos_bath' ],
    [ 'ads_oc_soda_cherry_cmp', 'ads_oc_soda_cherry' ],
    [ 'ads_disney_tvcmp', 'ads_disney_tv' ],
    [ 'ads_hh_safecmp', 'ads_hh_safe' ],
    [ 'ads_sunnyvend_camp', 'ads_sunnyvend' ],
    [ 'ads_rangocactus_camp', 'ads_rangocactus' ],
    [ 'ads_wowpball_camp', 'ads_wowpball' ],
    [ 'ads_suun_camp', 'ads_suun' ],
    [ 'ads_liisu_camp', 'ads_liisu' ],
    [ 'ads_honeymonster_cmp', 'ads_honeymonster' ],
    [ 'ads_ag_crate_camp', 'ads_ag_crate' ],
    [ 'ads_dfrisss_camp', 'ads_dfrisss' ]
  ]

  const parsed = [...items]

  aliases.forEach((item) => {
    const defaultItem = item[1]
    const hiddenItem = item[0]

    const furniture = items.find(x => x.classname == defaultItem)

    if (furniture) {
      parsed.push({revision: furniture.revision, name: furniture.name, classname: hiddenItem});
    }
  })

  return parsed
}

async function handle () {
  const json = await fetchJson(`https://www.habbo.${config.domain}/gamedata/furnidata_json/0`)
  const all = await parse(json)

  await fetchMany([...all].map((item) => {
    return {
      src: `https://images.habbo.com/dcr/hof_furni/${item.revision}/${item.name}`,
      dst: (config.revision)
        ? `dcr/hof_furni/${item.revision}/${item.name}`
        : `dcr/hof_furni/${item.name}`
    }
  }))
}

module.exports = handle
