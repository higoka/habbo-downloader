<?php

if (! is_dir('resources/furnitures')) {
    mkdir('resources/furnitures', 0777, true);
}

$xml = file_get_contents('resources/gamedata/furnidata.xml');

# php has trouble parsing "&" so we replace with encoded value
$xml = str_replace('&', '&amp;', $xml);

$furnidata = simplexml_load_string($xml);

foreach ($furnidata->xpath('//furnitype') as $item) {
    $name = strtok($item->attributes()->classname, '*');

    $src = "https://images.habbo.com/dcr/hof_furni/{$item->revision}/{$name}.swf";
    $dst = "resources/furnitures/{$name}.swf";

    if ($config['useRevision']) {
        if (! is_dir("resources/furnitures/{$item->revision}")) {
            mkdir("resources/furnitures/{$item->revision}", 0777, true);
        }

        $dst = "resources/furnitures/{$item->revision}/{$name}.swf";
    }

    $files[$src] = $dst;
}

fetch($files);
