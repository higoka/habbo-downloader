<?php

function fetchString(string $url): ?string
{
    $ch = curl_init($url);

    curl_setopt($ch, CURLOPT_HEADER, false);
    curl_setopt($ch, CURLOPT_USERAGENT, 'habbo-sucks');
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $content  = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

    curl_close($ch);

    return ($httpCode === 200) ? $content : null;
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