<?php

if (! is_dir('resources/furnitures')) {
    mkdir('resources/furnitures', 0777, true);
}

$xml = file_get_contents('resources/gamedata/furnidata.xml');

# temporary fix for corrupted furnidata (com.br only)
# https://www.habbo.com.br/gamedata/furnidata_xml/0
if ($config['domain'] === 'com.br') {
    $xml = str_replace('&', '&amp;', $xml);
}

$furnidata = simplexml_load_string($xml);

foreach ($furnidata->xpath('//furnitype') as $item) {
    $name = strtok($item->attributes()->classname, '*');

    $src = "https://images.habbo.com/dcr/hof_furni/{$item->revision}/{$name}.swf";
    $dst = "resources/furnitures/{$name}.swf";

    $files[$src] = $dst;

    if ($config['furnitureIcon'] === false) {
        continue;
    }

    $src = "https://images.habbo.com/dcr/hof_furni/{$item->revision}/{$name}_icon.png";
    $dst = "resources/furnitures/{$name}_icon.png";

    $files[$src] = $dst;
}

fetch($files);
