<?php

if (! is_dir('resources/targetedoffers')) {
    mkdir('resources/targetedoffers', 0777, true);
}

$var = file_get_contents('resources/gamedata/external_variables.txt');

preg_match_all('~(?<=targeted\.offer\.override\.preview_image).+=(.+)$~mi', $var, $match);

foreach ($match[1] as $name) {
    $src = "https://images.habbo.com/c_images/{$name}";
    $dst = "resources/{$name}";

    $files[$src] = $dst;
}

fetch($files);
