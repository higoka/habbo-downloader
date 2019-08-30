<?php

if (! is_dir('resources/hotelview')) {
    mkdir('resources/hotelview', 0777, true);
}

$var = file_get_contents('resources/gamedata/external_variables.txt');

preg_match_all('~(?<=landing.view.background).+(reception/.+)~i', $var, $match);

foreach ($match[1] as $name) {
    $src = "https://images.habbo.com/c_images/reception/{$name}";
    $dst = "resources/hotelview/{$name}";

    $files[$src] = $dst;
}

fetch($files);
