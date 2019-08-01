<?php

if (! is_dir('resources/badges')) {
    mkdir('resources/badges', 0777, true);
}

$texts = file_get_contents('resources/gamedata/external_flash_texts.txt');

preg_match_all('~(?|(\w+)_badge_name|badge_name_(\w+)|(\w+)_badge_desc|badge_desc_(\w+))~', $texts, $matches);

foreach (array_unique($matches[1]) as $badge) {
    $src = "https://images.habbo.com/c_images/album1584/{$badge}.gif";
    $dst = "resources/badges/{$badge}.gif";

    $files[$src] = $dst;
}

download($files);
