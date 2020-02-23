<?php

if (! is_dir('resources/pets')) {
    mkdir('resources/pets', 0777, true);
}

fetch([
    "https://images.habbo.com/gordon/{$prod}/bear.swf"           => 'resources/pets/bear.swf',
    "https://images.habbo.com/gordon/{$prod}/bearbaby.swf"       => 'resources/pets/bearbaby.swf',
    "https://images.habbo.com/gordon/{$prod}/bunnydepressed.swf" => 'resources/pets/bunnydepressed.swf',
    "https://images.habbo.com/gordon/{$prod}/bunnyeaster.swf"    => 'resources/pets/bunnyeaster.swf',
    "https://images.habbo.com/gordon/{$prod}/bunnyevil.swf"      => 'resources/pets/bunnyevil.swf',
    "https://images.habbo.com/gordon/{$prod}/bunnylove.swf"      => 'resources/pets/bunnylove.swf',
    "https://images.habbo.com/gordon/{$prod}/cat.swf"            => 'resources/pets/cat.swf',
    "https://images.habbo.com/gordon/{$prod}/chicken.swf"        => 'resources/pets/chicken.swf',
    "https://images.habbo.com/gordon/{$prod}/cow.swf"            => 'resources/pets/cow.swf',
    "https://images.habbo.com/gordon/{$prod}/croco.swf"          => 'resources/pets/croco.swf',
    "https://images.habbo.com/gordon/{$prod}/demonmonkey.swf"    => 'resources/pets/demonmonkey.swf',
    "https://images.habbo.com/gordon/{$prod}/dog.swf"            => 'resources/pets/dog.swf',
    "https://images.habbo.com/gordon/{$prod}/dragon.swf"         => 'resources/pets/dragon.swf',
    "https://images.habbo.com/gordon/{$prod}/fools.swf"          => 'resources/pets/fools.swf',
    "https://images.habbo.com/gordon/{$prod}/frog.swf"           => 'resources/pets/frog.swf',
    "https://images.habbo.com/gordon/{$prod}/gnome.swf"          => 'resources/pets/gnome.swf',
    "https://images.habbo.com/gordon/{$prod}/haloompa.swf"       => 'resources/pets/haloompa.swf',
    "https://images.habbo.com/gordon/{$prod}/horse.swf"          => 'resources/pets/horse.swf',
    "https://images.habbo.com/gordon/{$prod}/kittenbaby.swf"     => 'resources/pets/kittenbaby.swf',
    "https://images.habbo.com/gordon/{$prod}/lion.swf"           => 'resources/pets/lion.swf',
    "https://images.habbo.com/gordon/{$prod}/monkey.swf"         => 'resources/pets/monkey.swf',
    "https://images.habbo.com/gordon/{$prod}/monster.swf"        => 'resources/pets/monster.swf',
    "https://images.habbo.com/gordon/{$prod}/monsterplant.swf"   => 'resources/pets/monsterplant.swf',
    "https://images.habbo.com/gordon/{$prod}/pig.swf"            => 'resources/pets/pig.swf',
    "https://images.habbo.com/gordon/{$prod}/pigeonevil.swf"     => 'resources/pets/pigeonevil.swf',
    "https://images.habbo.com/gordon/{$prod}/pigeongood.swf"     => 'resources/pets/pigeongood.swf',
    "https://images.habbo.com/gordon/{$prod}/pigletbaby.swf"     => 'resources/pets/pigletbaby.swf',
    "https://images.habbo.com/gordon/{$prod}/pterosaur.swf"      => 'resources/pets/pterosaur.swf',
    "https://images.habbo.com/gordon/{$prod}/puppybaby.swf"      => 'resources/pets/puppybaby.swf',
    "https://images.habbo.com/gordon/{$prod}/rhino.swf"          => 'resources/pets/rhino.swf',
    "https://images.habbo.com/gordon/{$prod}/spider.swf"         => 'resources/pets/spider.swf',
    "https://images.habbo.com/gordon/{$prod}/terrier.swf"        => 'resources/pets/terrier.swf',
    "https://images.habbo.com/gordon/{$prod}/terrierbaby.swf"    => 'resources/pets/terrierbaby.swf',
    "https://images.habbo.com/gordon/{$prod}/turtle.swf"         => 'resources/pets/turtle.swf',
    "https://images.habbo.com/gordon/{$prod}/velociraptor.swf"   => 'resources/pets/velociraptor.swf',
]);
