<?php

function fetch(array $files, bool $override = false): void
{
    $context = stream_context_create([
        'http' => [
            'header' => 'user-agent:habbo-sucks',
        ],
        'ssl' => [
            'verify_peer' => false,
            'verify_peer_name' => false,
        ],
    ]);

    foreach ($files as $src => $dst) {
        echo "\n> downloading: $src";

        if (is_file($dst) && $override === false) {
            continue;
        }

        copy($src, $dst, $context);
    }
}

function parseProduction(): string
{
    $var = file_get_contents('https://www.habbo.com/gamedata/external_variables/0', false, stream_context_create([
        'http' => [
            'header' => 'user-agent:habbo-sucks',
        ],
        'ssl' => [
            'verify_peer' => false,
            'verify_peer_name' => false,
        ],
    ]));

    if (! preg_match('~PRODUCTION-[^/]+~i', $var, $match)) {
        exit("error parsing production\n");
    }

    echo "\n\e[32m@ {$match[0]}\e[0m\n";

    return $match[0];
}
