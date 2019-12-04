<?php

$config = require_once "config/app.php";

if ($config["debug"]) {
    error_reporting(E_ALL);
    ini_set("display_errors", true);
    ini_set("display_startup_errors", true);
} else {
    error_reporting(0);
    ini_set("display_errors", false);
    ini_set("display_startup_errors", false);
}

require_once "src/functions.php";
require_once "src/Terminal.php";

echo "
   __        __   __
  / /  ___ _/ /  / /  ___
 / _ \/ _ `/ _ \/ _ \/ _ \
/_//_/\_,_/_.__/_.__/\___/            __
 ___/ /__ _    _____  / /__  ___ ____/ /__ ____
/ _  / _ \ |/|/ / _ \/ / _ \/ _ `/ _  / -_) __/
\_,_/\___/__,__/_//_/_/\___/\_,_/\_,_/\__/_/

initializing...\n";

$prod = parseProduction();

require_once "src/gamedata.php";

$commands = array(
    "badges" => array(
        "help" => "Download all badges",
        "script" => "src/badges.php"
    ),
    "furnitures" => array(
        "help" => "Download all furnitures",
        "script" => "src/furnitures.php"
    ),
    "clothes" => array(
        "help" => "Download all clothes",
        "script" => "src/clothes.php"
    ),
    "effects" => array(
        "help" => "Download all effects",
        "script" => "src/effects.php"
    ),
    "icons" => array(
        "help" => "Download all icons",
        "script" => "src/icons.php"
    ),
    "mp3" => array(
        "help" => "Download all sounds",
        "script" => "src/mp3.php"
    ),
    "hotelview" => array(
        "help" => "Download all hotelview images",
        "script" => "src/hotelview.php"
    ),
    "ficon" => array(
        "help" => "Download all furniture icons",
        "script" => "src/ficon.php"
    ),
    "gamedata" => array(
        "help" => "Download all gamedata files",
        "script" => "src/gamedata.php"
    ),
    "help" => array(
        "help" => "Show this help"
    ),
    "exit" => array(
        "help" => "Quit application"
    ),
);

function prompt ($message) {
    echo $message;

    while (!$input = trim(fgets(STDIN))) {
        echo $message;
    }
    return $input;
}

echo "\x1b[33mNeed Help? Enter \"help\".\x1b[0m\n\n";

while (true) {
    $input = prompt("Enter a command: ");

    if (isset($commands[$input]) && isset($commands[$input]["script"])) {
        $command = $commands[$input];
        require_once $command["script"];
    }

    if ($input == "exit") {
        exit("\x1b[33mBye :)\x1b[0m\n");
    }

    if ($input == "help") {
        $max_width = max(array_map('strlen', array_keys($commands))) + 4;
        $line = str_repeat("=", Terminal::getWidth());
        echo "\n\x1b[1mHabbo Downloader Help:\n\x1b[0m\n";
        echo $line;
        echo "\n\x1b[1m".str_pad("Command", $max_width, " ")."Description\x1b[0m\n";
        echo $line;
        foreach ($commands as $cmd => $attrs) {
            $cmd = str_pad($cmd, $max_width, ' ');
            $help = $attrs["help"];
            echo "$cmd$help\n";
        }
        echo "\n";
        continue;
    }

    echo "\x1b[31mInvalid command!\x1b[0m\n";
}