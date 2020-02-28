<?php

$config = require_once 'config/app.php';

if ($config['debug']) {
    error_reporting(E_ALL);
    ini_set('display_errors', true);
    ini_set('display_startup_errors', true);
} else {
    error_reporting(0);
    ini_set('display_errors', false);
    ini_set('display_startup_errors', false);
}

require_once 'src/functions.php';

echo "
   __        __   __
  / /  ___ _/ /  / /  ___
 / _ \/ _ `/ _ \/ _ \/ _ \
/_//_/\_,_/_.__/_.__/\___/            __
 ___/ /__ _    _____  / /__  ___ ____/ /__ ____
/ _  / _ \ |/|/ / _ \/ / _ \/ _ `/ _  / -_) __/
\_,_/\___/__,__/_//_/_/\___/\_,_/\_,_/\__/_/

> Discord @ higoka#7120
> Enter \"help\" for a list of commands

initializing...\n";

$prod = parseProduction();

require_once 'src/gamedata.php';

echo "\n\nenter a command: ";

switch (trim(fgets(STDIN))) {
    case 'badges':
        require_once 'src/badges.php';
        break;
    case 'furnitures':
        require_once 'src/furnitures.php';
        break;
    case 'clothes':
        require_once 'src/clothes.php';
        break;
    case 'effects':
        require_once 'src/effects.php';
        break;
    case 'icons':
        require_once 'src/icons.php';
        break;
    case 'mp3':
        require_once 'src/mp3.php';
        break;
    case 'hotelview':
        require_once 'src/hotelview.php';
        break;
    case 'ficon':
        require_once 'src/ficon.php';
        break;
    case 'gamedata':
        require_once 'src/gamedata.php';
        break;
    case 'habboswf':
        require_once 'src/habboswf.php';
        break;
    case 'pets':
        require_once 'src/pets.php';
        break;
    case 'badgeparts':
        require_once 'src/badgeparts.php';
        break;
    case 'targetedoffers':
        require_once 'src/targetedoffers.php';
        break;
    case 'promo':
        require_once 'src/promo.php';
        break;
    case 'help':
        require_once 'src/help.php';
        break;
    default:
        exit("\ninvalid command\n");
}

exit("\n\n");
