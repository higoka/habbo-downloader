const { fetchMany } = require('../functions')
const { config } = require('../utils')

async function handle () {
  const prod = await config('prod')
  await fetchMany([
    { src: `https://images.habbo.com/gordon/${prod}/bear.swf`, dst: `resource/gordon/${prod}/bear.swf` },
    { src: `https://images.habbo.com/gordon/${prod}/bearbaby.swf`, dst: `resource/gordon/${prod}/bearbaby.swf` },
    { src: `https://images.habbo.com/gordon/${prod}/bunnydepressed.swf`, dst: `resource/gordon/${prod}/bunnydepressed.swf` },
    { src: `https://images.habbo.com/gordon/${prod}/bunnyeaster.swf`, dst: `resource/gordon/${prod}/bunnyeaster.swf` },
    { src: `https://images.habbo.com/gordon/${prod}/bunnyevil.swf`, dst: `resource/gordon/${prod}/bunnyevil.swf` },
    { src: `https://images.habbo.com/gordon/${prod}/bunnylove.swf`, dst: `resource/gordon/${prod}/bunnylove.swf` },
    { src: `https://images.habbo.com/gordon/${prod}/cat.swf`, dst: `resource/gordon/${prod}/cat.swf` },
    { src: `https://images.habbo.com/gordon/${prod}/chicken.swf`, dst: `resource/gordon/${prod}/chicken.swf` },
    { src: `https://images.habbo.com/gordon/${prod}/cow.swf`, dst: `resource/gordon/${prod}/cow.swf` },
    { src: `https://images.habbo.com/gordon/${prod}/croco.swf`, dst: `resource/gordon/${prod}/croco.swf` },
    { src: `https://images.habbo.com/gordon/${prod}/demonmonkey.swf`, dst: `resource/gordon/${prod}/demonmonkey.swf` },
    { src: `https://images.habbo.com/gordon/${prod}/dog.swf`, dst: `resource/gordon/${prod}/dog.swf` },
    { src: `https://images.habbo.com/gordon/${prod}/dragon.swf`, dst: `resource/gordon/${prod}/dragon.swf` },
    { src: `https://images.habbo.com/gordon/${prod}/fools.swf`, dst: `resource/gordon/${prod}/fools.swf` },
    { src: `https://images.habbo.com/gordon/${prod}/frog.swf`, dst: `resource/gordon/${prod}/frog.swf` },
    { src: `https://images.habbo.com/gordon/${prod}/gnome.swf`, dst: `resource/gordon/${prod}/gnome.swf` },
    { src: `https://images.habbo.com/gordon/${prod}/haloompa.swf`, dst: `resource/gordon/${prod}/haloompa.swf` },
    { src: `https://images.habbo.com/gordon/${prod}/horse.swf`, dst: `resource/gordon/${prod}/horse.swf` },
    { src: `https://images.habbo.com/gordon/${prod}/kittenbaby.swf`, dst: `resource/gordon/${prod}/kittenbaby.swf` },
    { src: `https://images.habbo.com/gordon/${prod}/lion.swf`, dst: `resource/gordon/${prod}/lion.swf` },
    { src: `https://images.habbo.com/gordon/${prod}/monkey.swf`, dst: `resource/gordon/${prod}/monkey.swf` },
    { src: `https://images.habbo.com/gordon/${prod}/monster.swf`, dst: `resource/gordon/${prod}/monster.swf` },
    { src: `https://images.habbo.com/gordon/${prod}/monsterplant.swf`, dst: `resource/gordon/${prod}/monsterplant.swf` },
    { src: `https://images.habbo.com/gordon/${prod}/pig.swf`, dst: `resource/gordon/${prod}/pig.swf` },
    { src: `https://images.habbo.com/gordon/${prod}/pigeonevil.swf`, dst: `resource/gordon/${prod}/pigeonevil.swf` },
    { src: `https://images.habbo.com/gordon/${prod}/pigeongood.swf`, dst: `resource/gordon/${prod}/pigeongood.swf` },
    { src: `https://images.habbo.com/gordon/${prod}/pigletbaby.swf`, dst: `resource/gordon/${prod}/pigletbaby.swf` },
    { src: `https://images.habbo.com/gordon/${prod}/pterosaur.swf`, dst: `resource/gordon/${prod}/pterosaur.swf` },
    { src: `https://images.habbo.com/gordon/${prod}/puppybaby.swf`, dst: `resource/gordon/${prod}/puppybaby.swf` },
    { src: `https://images.habbo.com/gordon/${prod}/rhino.swf`, dst: `resource/gordon/${prod}/rhino.swf` },
    { src: `https://images.habbo.com/gordon/${prod}/spider.swf`, dst: `resource/gordon/${prod}/spider.swf` },
    { src: `https://images.habbo.com/gordon/${prod}/terrier.swf`, dst: `resource/gordon/${prod}/terrier.swf` },
    { src: `https://images.habbo.com/gordon/${prod}/terrierbaby.swf`, dst: `resource/gordon/${prod}/terrierbaby.swf` },
    { src: `https://images.habbo.com/gordon/${prod}/turtle.swf`, dst: `resource/gordon/${prod}/turtle.swf` },
    { src: `https://images.habbo.com/gordon/${prod}/velociraptor.swf`, dst: `resource/gordon/${prod}/velociraptor.swf` },
  ])
}

module.exports = handle
