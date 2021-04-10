const { fetchMany, config } = require('../functions')

async function handle () {
  await fetchMany([
    { src: `https://images.habbo.com/gordon/${config.prod}/bear.swf`, dst: `gordon/${config.prod}/bear.swf` },
    { src: `https://images.habbo.com/gordon/${config.prod}/bearbaby.swf`, dst: `gordon/${config.prod}/bearbaby.swf` },
    { src: `https://images.habbo.com/gordon/${config.prod}/bunnydepressed.swf`, dst: `gordon/${config.prod}/bunnydepressed.swf` },
    { src: `https://images.habbo.com/gordon/${config.prod}/bunnyeaster.swf`, dst: `gordon/${config.prod}/bunnyeaster.swf` },
    { src: `https://images.habbo.com/gordon/${config.prod}/bunnyevil.swf`, dst: `gordon/${config.prod}/bunnyevil.swf` },
    { src: `https://images.habbo.com/gordon/${config.prod}/bunnylove.swf`, dst: `gordon/${config.prod}/bunnylove.swf` },
    { src: `https://images.habbo.com/gordon/${config.prod}/cat.swf`, dst: `gordon/${config.prod}/cat.swf` },
    { src: `https://images.habbo.com/gordon/${config.prod}/chicken.swf`, dst: `gordon/${config.prod}/chicken.swf` },
    { src: `https://images.habbo.com/gordon/${config.prod}/cow.swf`, dst: `gordon/${config.prod}/cow.swf` },
    { src: `https://images.habbo.com/gordon/${config.prod}/croco.swf`, dst: `gordon/${config.prod}/croco.swf` },
    { src: `https://images.habbo.com/gordon/${config.prod}/demonmonkey.swf`, dst: `gordon/${config.prod}/demonmonkey.swf` },
    { src: `https://images.habbo.com/gordon/${config.prod}/dog.swf`, dst: `gordon/${config.prod}/dog.swf` },
    { src: `https://images.habbo.com/gordon/${config.prod}/dragon.swf`, dst: `gordon/${config.prod}/dragon.swf` },
    { src: `https://images.habbo.com/gordon/${config.prod}/fools.swf`, dst: `gordon/${config.prod}/fools.swf` },
    { src: `https://images.habbo.com/gordon/${config.prod}/frog.swf`, dst: `gordon/${config.prod}/frog.swf` },
    { src: `https://images.habbo.com/gordon/${config.prod}/gnome.swf`, dst: `gordon/${config.prod}/gnome.swf` },
    { src: `https://images.habbo.com/gordon/${config.prod}/haloompa.swf`, dst: `gordon/${config.prod}/haloompa.swf` },
    { src: `https://images.habbo.com/gordon/${config.prod}/horse.swf`, dst: `gordon/${config.prod}/horse.swf` },
    { src: `https://images.habbo.com/gordon/${config.prod}/kittenbaby.swf`, dst: `gordon/${config.prod}/kittenbaby.swf` },
    { src: `https://images.habbo.com/gordon/${config.prod}/lion.swf`, dst: `gordon/${config.prod}/lion.swf` },
    { src: `https://images.habbo.com/gordon/${config.prod}/monkey.swf`, dst: `gordon/${config.prod}/monkey.swf` },
    { src: `https://images.habbo.com/gordon/${config.prod}/monster.swf`, dst: `gordon/${config.prod}/monster.swf` },
    { src: `https://images.habbo.com/gordon/${config.prod}/monsterplant.swf`, dst: `gordon/${config.prod}/monsterplant.swf` },
    { src: `https://images.habbo.com/gordon/${config.prod}/pig.swf`, dst: `gordon/${config.prod}/pig.swf` },
    { src: `https://images.habbo.com/gordon/${config.prod}/pigeonevil.swf`, dst: `gordon/${config.prod}/pigeonevil.swf` },
    { src: `https://images.habbo.com/gordon/${config.prod}/pigeongood.swf`, dst: `gordon/${config.prod}/pigeongood.swf` },
    { src: `https://images.habbo.com/gordon/${config.prod}/pigletbaby.swf`, dst: `gordon/${config.prod}/pigletbaby.swf` },
    { src: `https://images.habbo.com/gordon/${config.prod}/pterosaur.swf`, dst: `gordon/${config.prod}/pterosaur.swf` },
    { src: `https://images.habbo.com/gordon/${config.prod}/puppybaby.swf`, dst: `gordon/${config.prod}/puppybaby.swf` },
    { src: `https://images.habbo.com/gordon/${config.prod}/rhino.swf`, dst: `gordon/${config.prod}/rhino.swf` },
    { src: `https://images.habbo.com/gordon/${config.prod}/spider.swf`, dst: `gordon/${config.prod}/spider.swf` },
    { src: `https://images.habbo.com/gordon/${config.prod}/terrier.swf`, dst: `gordon/${config.prod}/terrier.swf` },
    { src: `https://images.habbo.com/gordon/${config.prod}/terrierbaby.swf`, dst: `gordon/${config.prod}/terrierbaby.swf` },
    { src: `https://images.habbo.com/gordon/${config.prod}/turtle.swf`, dst: `gordon/${config.prod}/turtle.swf` },
    { src: `https://images.habbo.com/gordon/${config.prod}/velociraptor.swf`, dst: `gordon/${config.prod}/velociraptor.swf` },
  ])
}

module.exports = handle
