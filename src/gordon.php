<?php

if (! is_dir("resources/gordon/{$prod}")) {
    mkdir("resources/gordon/{$prod}", 0777, true);
}

fetch([
    "https://images.habbo.com/gordon/{$prod}/PlaceHolderFurniture.swf" => "resources/gordon/{$prod}/PlaceHolderFurniture.swf",
    "https://images.habbo.com/gordon/{$prod}/PlaceHolderWallItem.swf"  => "resources/gordon/{$prod}/PlaceHolderWallItem.swf",
    "https://images.habbo.com/gordon/{$prod}/PlaceHolderPet.swf"       => "resources/gordon/{$prod}/PlaceHolderPet.swf",
    "https://images.habbo.com/gordon/{$prod}/HabboRoomContent.swf"     => "resources/gordon/{$prod}/HabboRoomContent.swf",
    "https://images.habbo.com/gordon/{$prod}/TileCursor.swf"           => "resources/gordon/{$prod}/TileCursor.swf",
    "https://images.habbo.com/gordon/{$prod}/SelectionArrow.swf"       => "resources/gordon/{$prod}/SelectionArrow.swf",
    "https://images.habbo.com/gordon/{$prod}/HabboAvatarActions.xml"   => "resources/gordon/{$prod}/HabboAvatarActions.xml",
    "https://images.habbo.com/gordon/{$prod}/config_habbo.xml"         => "resources/gordon/{$prod}/config_habbo.xml",
]);
