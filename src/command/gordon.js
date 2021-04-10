const { fetchMany, config } = require('../functions')

async function handle () {
  await fetchMany([
    { src: `https://images.habbo.com/gordon/${config.prod}/config_habbo.xml`, dst: `gordon/${config.prod}/config_habbo.xml` },
    { src: `https://images.habbo.com/gordon/${config.prod}/HabboAvatarActions.xml`, dst: `gordon/${config.prod}/HabboAvatarActions.xml` },
    { src: `https://images.habbo.com/gordon/${config.prod}/HabboRoomContent.swf`, dst: `gordon/${config.prod}/HabboRoomContent.swf` },
    { src: `https://images.habbo.com/gordon/${config.prod}/PlaceHolderFurniture.swf`, dst: `gordon/${config.prod}/PlaceHolderFurniture.swf` },
    { src: `https://images.habbo.com/gordon/${config.prod}/PlaceHolderPet.swf`, dst: `gordon/${config.prod}/PlaceHolderPet.swf` },
    { src: `https://images.habbo.com/gordon/${config.prod}/PlaceHolderWallItem.swf`, dst: `gordon/${config.prod}/PlaceHolderWallItem.swf` },
    { src: `https://images.habbo.com/gordon/${config.prod}/SelectionArrow.swf`, dst: `gordon/${config.prod}/SelectionArrow.swf` },
    { src: `https://images.habbo.com/gordon/${config.prod}/TileCursor.swf`, dst: `gordon/${config.prod}/TileCursor.swf` },
  ])
}

module.exports = handle
