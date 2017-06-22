<?php

function download(array $files)
{
    $context = stream_context_create([
        'http' => [
            'user_agent' => 'n00b',
        ],
        'ssl' => [
            'verify_peer'      => false,
            'verify_peer_name' => false,
        ],
    ]);

    foreach ($files as $file => $url) {
        echo "> Downloading: $url\n";

        if (file_exists($file)) {
            continue;
        }

        $result = file_get_contents($url, false, $context);

        if (! $result) {
            continue;
        }

        file_put_contents($file, $result);
    }
}
