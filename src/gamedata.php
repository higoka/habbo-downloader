<?php

if (! is_dir('resources/gamedata')) {
    mkdir('resources/gamedata', 0777, true);
}

$files = [
    'https://www.habbo.com/gamedata/furnidata_xml/1'        => 'resources/gamedata/furnidata.xml',
    'https://www.habbo.com/gamedata/external_variables/1'   => 'resources/gamedata/external_variables.txt',
    'https://www.habbo.com/gamedata/external_flash_texts/1' => 'resources/gamedata/external_flash_texts.txt',
    "https://images.habbo.com/gordon/{$prod}/figuremap.xml" => 'resources/gamedata/figuremap.xml',
    "https://images.habbo.com/gordon/{$prod}/effectmap.xml" => 'resources/gamedata/effectmap.xml',
];

fetch($files, true);
