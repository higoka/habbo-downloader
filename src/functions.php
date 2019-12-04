<?php

require_once __DIR__.'/Terminal.php';

function create_progress (string $format) {
    $current_char = '=';
    $bar_char = '.';
    $bar_token = '{bar}';
    $width = Terminal::getWidth();

    return function (int $current, int $total, array $tokens = array()) use ($format, $current_char, $bar_token, $bar_char, $width) {
        $tokens['current'] = $current;
        $tokens['total'] = $total;
        $tokens['percent'] = number_format(($current / $total) * 100, 1, '.', '')."%";
        
        $progress_bar = preg_replace_callback("|{(\w+)}|", function(array $matches) use ($tokens) {
            $token = $matches[1];
            return isset($tokens[$token]) ? $tokens[$token] : $matches[0];
        }, $format);

        $progress_width = $width - strlen($progress_bar) - strlen($bar_token);
        $filled_width = ceil($progress_width * ($current / $total));
        $filled = array_fill(0, $filled_width, $current_char);
        $bar = array_fill(0, $progress_width, $bar_char);
        array_splice($bar, 0, $filled_width, join('', $filled));
        $bar = join('', $bar);
        return str_replace($bar_token, $bar, $progress_bar);
    };
}

function fetch(array $files, bool $override = false): void
{
    $clear_line = "\x1b[F\x1b[0G\x1b[2K";
    $prog = create_progress("{before}Downloading {file} {percent} [{bar}] {current}/{total}\n");

    $context = stream_context_create([
        'http' => [
            'header' => 'user-agent:habbo-sucks',
        ],
    ]);

    $i = 0;
    $total = count($files);

    foreach ($files as $src => $dst) {
        $i++;
        echo call_user_func($prog, $i, $total, array(
            'file' => substr(str_pad(basename($src), 30, ' '), 0, 30),
            'before' => $clear_line
        ));

        // echo "\n> downloading $i of $total: $src";

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
    ]));

    if (! preg_match('~PRODUCTION-[^/]+~i', $var, $match)) {
        exit("error parsing production\n");
    }

    echo "\n\e[32m@ {$match[0]}\e[0m\n";

    return $match[0];
}
