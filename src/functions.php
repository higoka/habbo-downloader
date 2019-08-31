<?php

function fetch(array $files, bool $override = false): void
{
    $context = stream_context_create([
        'http' => [
            'user_agent' => 'habbo-sucks',
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
    echo "parsing current production...\n";

    $context = stream_context_create([
        'http' => [
            'user_agent' => 'habbo-sucks',
        ],
    ]);

    $var = file_get_contents('https://www.habbo.com/gamedata/external_variables/1', false, $context);

    if (! preg_match('~PRODUCTION-[^/]+~i', $var, $match)) {
        exit("error parsing production\n");
    }

    return $match[0];
}
