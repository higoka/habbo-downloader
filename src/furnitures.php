<?php

if (! is_dir('resources/furnitures')) {
    mkdir('resources/furnitures', 0777, true);
}

$furnidata = new SimpleXMLElement(file_get_contents('resources/gamedata/furnidata.xml'));

$roomItems = (array) $furnidata->roomitemtypes;
$wallItems = (array) $furnidata->wallitemtypes;

foreach (array_merge($roomItems, $wallItems)['furnitype'] as $item) {
    $url  = sprintf('https://images.habbo.com/dcr/hof_furni/%d/%s.swf', $item->revision, $item->attributes()->classname);
    $file = sprintf('resources/furnitures/%s.swf', $item->attributes()->classname);

    $files[$file] = $url;
}

download($files);
