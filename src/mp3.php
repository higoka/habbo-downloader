<?php

if (! is_dir('resources/mp3')) {
    mkdir('resources/mp3', 0777, true);
}

for ($i = 0; $i <= 800; $i++) {
    $src = "https://images.habbo.com/dcr/hof_furni/mp3/sound_machine_sample_{$i}.mp3";
    $dst = "resources/mp3/sound_machine_sample_{$i}.mp3";

    $files[$src] = $dst;
}

download($files);
