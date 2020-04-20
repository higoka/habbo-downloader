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

function checkSystem(): void
{
    if (extension_loaded('openssl') === false) {
        exit("\n\e[31mExtension missing: openssl\e[0m\n");
    }

    if (extension_loaded('simplexml') === false) {
        exit("\n\e[31mExtension missing: simplexml\e[0m\n");
    }

    if (ini_get('allow_url_fopen') !== '1') {
        exit("\n\e[31m\"allow_url_fopen\" must be enabled\e[0m\n");
    }
}

function checkVersion(): void
{
    $res = file_get_contents('https://api.github.com/repos/higoka/habbo-downloader/releases/latest', false, stream_context_create([
        'http' => [
            'header' => 'user-agent:habbo-sucks',
        ],
        'ssl' => [
            'verify_peer' => false,
            'verify_peer_name' => false,
        ],
    ]));

    $json = json_decode($res, true);

    if (version_compare(VERSION, $json['tag_name'], '<')) {
        echo "\n\e[33m> Update available: {$json['tag_name']}\e[0m\n";
    }
}
