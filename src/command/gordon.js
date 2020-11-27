const { fetchMany } = require('../functions')
const { config } = require('../utils')

async function handle () {
  const prod = await config('prod')
  await fetchMany([
    { src: `https://images.habbo.com/gordon/${prod}/config_habbo.xml`, dst: `resource/gordon/${prod}/config_habbo.xml` },
    { src: `https://images.habbo.com/gordon/${prod}/HabboAvatarActions.xml`, dst: `resource/gordon/${prod}/HabboAvatarActions.xml` },
    { src: `https://images.habbo.com/gordon/${prod}/HabboRoomContent.swf`, dst: `resource/gordon/${prod}/HabboRoomContent.swf` },
    { src: `https://images.habbo.com/gordon/${prod}/PlaceHolderFurniture.swf`, dst: `resource/gordon/${prod}/PlaceHolderFurniture.swf` },
    { src: `https://images.habbo.com/gordon/${prod}/PlaceHolderPet.swf`, dst: `resource/gordon/${prod}/PlaceHolderPet.swf` },
    { src: `https://images.habbo.com/gordon/${prod}/PlaceHolderWallItem.swf`, dst: `resource/gordon/${prod}/PlaceHolderWallItem.swf` },
    { src: `https://images.habbo.com/gordon/${prod}/SelectionArrow.swf`, dst: `resource/gordon/${prod}/SelectionArrow.swf` },
    { src: `https://images.habbo.com/gordon/${prod}/TileCursor.swf`, dst: `resource/gordon/${prod}/TileCursor.swf` },
  ])
}

module.exports = handle
