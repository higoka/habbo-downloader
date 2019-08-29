<?php

if (! is_dir('resources/clothes')) {
    mkdir('resources/clothes', 0777, true);
}

$figuremap = simplexml_load_file('resources/gamedata/figuremap.xml');

foreach ($figuremap as $item) {
    $src = "https://images.habbo.com/gordon/{$prod}/{$item->attributes()->id}.swf";
    $dst = "resources/clothes/{$item->attributes()->id}.swf";

    $files[$src] = $dst;
}

fetch($files);
