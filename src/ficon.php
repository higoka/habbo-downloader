<?php

if (! is_dir('resources/ficon')) {
    mkdir('resources/ficon', 0777, true);
}

$xml = file_get_contents('resources/gamedata/furnidata.xml');

# php has trouble parsing "&" so we replace with encoded value
$xml = str_replace('&', '&amp;', $xml);

$furnidata = simplexml_load_string($xml);

foreach ($furnidata->xpath('//furnitype') as $item) {
    $name = str_replace('*', '_', $item->attributes()->classname);

    $src = "https://images.habbo.com/dcr/hof_furni/{$item->revision}/{$name}_icon.png";
    $dst = "resources/ficon/{$name}_icon.png";

    $files[$src] = $dst;
}

fetch($files);
