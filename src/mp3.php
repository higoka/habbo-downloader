<?php

if (! is_dir('resources/mp3')) {
    mkdir('resources/mp3', 0777, true);
}

for ($i = 0; $i <= 800; $i++) {
    $url  = sprintf('https://images.habbo.com/dcr/hof_furni/mp3/sound_machine_sample_%d.mp3', $i);
    $file = sprintf('resources/mp3/sound_machine_sample_%d.mp3', $i);

    $files[$file] = $url;
}

download($files);
