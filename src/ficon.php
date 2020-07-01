<?php

if (! is_dir('resources/ficon')) {
    mkdir('resources/ficon', 0777, true);
}

$furnidata = simplexml_load_file('resources/gamedata/furnidata.xml');

foreach ($furnidata->xpath('//furnitype') as $item) {
    $name = str_replace('*', '_', $item->attributes()->classname);

    $src = "https://images.habbo.com/dcr/hof_furni/{$item->revision}/{$name}_icon.png";
    $dst = "resources/ficon/{$name}_icon.png";

    $files[$src] = $dst;
}

fetch($files);
