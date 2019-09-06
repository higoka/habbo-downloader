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
    $context = stream_context_create([
        'http' => [
            'user_agent' => 'habbo-sucks',
        ],
    ]);

    $var = file_get_contents('https://www.habbo.com/gamedata/external_variables/1', false, $context);

    if (! preg_match('~PRODUCTION-[^/]+~i', $var, $match)) {
        exit("error parsing production\n");
    }

    echo "\n\e[32m@ {$match[0]}\e[0m\n";

    return $match[0];
}

function checkVersion(): void
{
    $context = stream_context_create([
        'http' => [
            'user_agent' => 'habbo-sucks',
        ],
    ]);

    $json = file_get_contents('https://api.github.com/repos/higoka/habbo-downloader/releases/latest', false, $context);
    $json = json_decode($json, true);

    $version = substr($json['tag_name'], 1);

    if (version_compare($version, VERSION) === 1) {
        echo "\n\e[33m> new version available @ v{$version}\n";
    }
}
