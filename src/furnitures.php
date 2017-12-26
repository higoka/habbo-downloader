<?php

if (! is_dir('resources/furnitures')) {
    mkdir('resources/furnitures', 0777, true);
}

$furnidata = new SimpleXMLElement(file_get_contents('resources/gamedata/furnidata.xml'));

$roomItems = (array) $furnidata->roomitemtypes;
$wallItems = (array) $furnidata->wallitemtypes;

foreach (array_merge_recursive($roomItems, $wallItems)['furnitype'] as $item) {
    $name = strtok($item->attributes()->classname, '*');
    $url  = sprintf('https://images.habbo.com/dcr/hof_furni/%d/%s.swf', $item->revision, $name);
    $file = sprintf('resources/furnitures/%s.swf', $name);

    $files[$file] = $url;
}

download($files);
