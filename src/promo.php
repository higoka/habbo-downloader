<?php

if (! is_dir('resources/promo/web_promo')) {
    mkdir('resources/promo/web_promo', 0777, true);
}

if (! is_dir('resources/promo/web_promo_small')) {
    mkdir('resources/promo/web_promo_small', 0777, true);
}

$var = file_get_contents('resources/gamedata/external_variables.txt');

preg_match_all('~(web_promo(?:_small)?\/.*\.(?:png|gif|jpg|jpeg))~i', $var, $match);

foreach ($match[1] as $name) {
    $src = "https://images.habbo.com/c_images/{$name}";
    $dst = "resources/promo/{$name}";

    $files[$src] = $dst;
}

fetch($files);
