<?php

function download(array $files)
{
    $context = stream_context_create([
        'http' => [
            'user_agent' => 'habbo-sucks',
        ],
    ]);

    foreach ($files as $src => $dst) {
        echo "> Downloading: $src\n";

        if (is_file($dst)) {
            continue;
        }

        copy($src, $dst, $context);
    }
}
