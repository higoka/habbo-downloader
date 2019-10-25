<?php

function fetchString(string $url): string
{
    return file_get_contents($url, false, stream_context_create([
        'http' => [
            'header' => 'user-agent:habbo-sucks',
        ],
    ]));
}

function fetch(array $files, bool $override = false): void
{
    foreach ($files as $src => $dst) {
        echo "\n> downloading: $src";

        if (is_file($dst) && $override === false) {
            continue;
        }

        if (null === ($content = fetchString($src))) {
            continue;
        }

        file_put_contents($dst, $content);
    }
}

function parseProduction(): string
{
    $var = fetchString('https://www.habbo.com/gamedata/external_variables/0');

    if (! preg_match('~PRODUCTION-[^/]+~i', $var, $match)) {
        exit("error parsing production\n");
    }

    echo "\n\e[32m@ {$match[0]}\e[0m\n";

    return $match[0];
}

function checkVersion(): void
{
    $json = fetchString('https://api.github.com/repos/higoka/habbo-downloader/releases/latest');
    $json = json_decode($json, true);

    $version = substr($json['tag_name'], 1);

    if (version_compare($version, VERSION) === 1) {
        echo "\n\e[33m> new version available @ v{$version}\n";
    }
}
