<?php

if (! is_dir('resources/ficons')) {
    mkdir('resources/ficons', 0777, true);
}

$furnidata = simplexml_load_file('resources/gamedata/furnidata.xml');

foreach ($furnidata->xpath('//furnitype') as $item) {
    $name = strtok($item->attributes()->classname, '*');

    $src = "https://images.habbo.com/dcr/hof_furni/{$item->revision}/{$name}_icon.png";
    $dst = "resources/ficons/{$name}_icon.png";

    $files[$src] = $dst;
}

fetch($files);
