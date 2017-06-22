<?php

if (! is_dir('resources/clothes')) {
    mkdir('resources/clothes', 0777, true);
}

$figuremap = new SimpleXMLElement(file_get_contents('resources/gamedata/figuremap.xml'));

foreach ($figuremap as $item) {
    $url  = sprintf('https://images.habbo.com/gordon/PRODUCTION-201706211508-77749782/%s.swf', $item->attributes()->id);
    $file = sprintf('resources/clothes/%s.swf', $item->attributes()->id);

    $files[$file] = $url;
}

download($files);
