<?php

function download(array $files, bool $override = false)
{
    $context = stream_context_create([
        'http' => [
            'user_agent' => 'habbo-sucks',
        ],
    ]);

    foreach ($files as $src => $dst) {
        echo "> Downloading: $src\n";

        if (is_file($dst) && $override === false) {
            continue;
        }

        copy($src, $dst, $context);
    }
}
