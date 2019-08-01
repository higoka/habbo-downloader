<?php

if (! is_dir('resources/icons')) {
    mkdir('resources/icons', 0777, true);
}

for ($i = 1; $i <= 300; $i++) {
    $src = "https://images.habbo.com/c_images/catalogue/icon_{$i}.png";
    $dst = "resources/icons/icon_{$i}.png";

    $files[$src] = $dst;
}

download($files);
