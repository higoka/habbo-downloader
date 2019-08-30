<?php

if (! is_dir('resources/effects')) {
    mkdir('resources/effects', 0777, true);
}

$effectmap = simplexml_load_file('resources/gamedata/effectmap.xml');

foreach ($effectmap as $item) {
    $src = "https://images.habbo.com/gordon/{$prod}/{$item->attributes()->lib}.swf";
    $dst = "resources/effects/{$item->attributes()->lib}.swf";

    $files[$src] = $dst;
}

fetch($files);
