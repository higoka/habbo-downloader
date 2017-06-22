<?php

if (! is_dir('resources/gamedata')) {
    mkdir('resources/gamedata', 0777, true);
}

$files = [
    'resources/gamedata/external_variables.txt'   => 'https://www.habbo.com/gamedata/external_variables/1',
    'resources/gamedata/external_flash_texts.txt' => 'https://www.habbo.com/gamedata/external_flash_texts/1',
];

download($files);
