<?php

if (! is_dir('resources/gamedata')) {
    mkdir('resources/gamedata', 0777, true);
}

fetch([
    "https://www.habbo.{$config['domain']}/gamedata/external_variables/0"                     => 'resources/gamedata/external_variables.txt',
    "https://www.habbo.{$config['domain']}/gamedata/external_flash_texts/0"                   => 'resources/gamedata/external_flash_texts.txt',
    "https://www.habbo.{$config['domain']}/gamedata/override/external_override_variables/0"   => 'resources/gamedata/external_override_variables.txt',
    "https://www.habbo.{$config['domain']}/gamedata/override/external_flash_override_texts/0" => 'resources/gamedata/external_flash_override_texts.txt',
    "https://www.habbo.{$config['domain']}/gamedata/furnidata_xml/0"                          => 'resources/gamedata/furnidata.xml',
    "https://www.habbo.{$config['domain']}/gamedata/productdata/0"                            => 'resources/gamedata/productdata.txt',
    "https://images.habbo.com/gordon/{$prod}/figuremap.xml"                                   => 'resources/gamedata/figuremap.xml',
    "https://images.habbo.com/gordon/{$prod}/effectmap.xml"                                   => 'resources/gamedata/effectmap.xml',
], true);
