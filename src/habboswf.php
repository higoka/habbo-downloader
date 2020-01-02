<?php

if (! is_dir("resources/${prod}")) {
    mkdir("resources/${prod}", 0777, true);
}

fetch(["https://images.habbo.com/gordon/{$prod}/Habbo.swf" => "resources/{$prod}/Habbo.swf"], true);
