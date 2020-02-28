<?php

if (! is_dir('resources/articles')) {
    mkdir('resources/articles', 0777, true);
}

$i = 1;

while (true) {
    if (($html = file_get_contents("https://images.habbo.com/habbo-web-news/en/production/all_{$i}.html")) === false) {
        break;
    }

    preg_match_all('~src=".*(?<=habbo-web-articles\/)([^=]+)".*(?=news-header__image)~i', $html, $match);

    foreach ($match[1] as $name) {
        $src = "https://images.habbo.com/web_images/habbo-web-articles/{$name}";
        $dst = "resources/articles/{$name}";

        $files[$src] = $dst;

        $name = str_replace('_thumb.png', '.png', $name);

        $src = "https://images.habbo.com/web_images/habbo-web-articles/{$name}";
        $dst = "resources/articles/{$name}";

        $files[$src] = $dst;
    }

    fetch($files);

    $i++;
}
