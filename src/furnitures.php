<?php

if (! is_dir('resources/furnitures')) {
    mkdir('resources/furnitures', 0777, true);
}

$furnidata = simplexml_load_file('resources/gamedata/furnidata.xml');

foreach ($furnidata->xpath('//furnitype') as $item) {
    $name = strtok($item->attributes()->classname, '*');

    $src = "https://images.habbo.com/dcr/hof_furni/{$item->revision}/{$name}.swf";
    $dst = "resources/furnitures/{$name}.swf";

    $files[$src] = $dst;
}

fetch($files);
