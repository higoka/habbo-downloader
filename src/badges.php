<?php

if (! is_dir('resources/badges')) {
    mkdir('resources/badges', 0777, true);
}

$text = file_get_contents('resources/gamedata/external_flash_texts.txt');

preg_match_all('~(?<=badge_(name|desc)_)[\w ]+|[\w ]+(?=_badge_(name|desc))~i', $text, $match);

foreach ($match[0] as $code) {
    $code = trim($code);

    $src = "https://images.habbo.com/c_images/album1584/{$code}.png";
    $dst = "resources/badges/{$code}.png";

    $files[$src] = $dst;
}

fetch($files, false, $config['saveGif']);
