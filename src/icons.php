<?php

if (! is_dir('resources/icons')) {
    mkdir('resources/icons', 0777, true);
}

for ($i = 1; $i <= 300; $i++) {
    $url = sprintf('https://images.habbo.com/c_images/catalogue/icon_%d.png', $i);
    $file = sprintf('resources/icons/icon_%d.png', $i);

    $files[$file] = $url;
}

download($files);
