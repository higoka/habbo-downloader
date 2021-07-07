# habbo-downloader 2.0

![downloads](https://img.shields.io/npm/dt/habbo-downloader?style=for-the-badge)
![version](https://img.shields.io/npm/v/habbo-downloader?label=version&style=for-the-badge)
![license](https://img.shields.io/npm/l/habbo-downloader?style=for-the-badge)

A tiny script to download various files directly from Habbo.

**Quick links: [COMMANDS](#commands) - [OPTIONS](#options) - [EXAMPLES](#examples) - [FAQ](#faq)**

## Note

If you are looking for a specific file or dont want to use habbo-downloader yourself,
you can take a look at the [resource](https://github.com/higoka/habbo-downloader/tree/main/resource) folder. This folder contains all downloaded files from 
habbo-downloader and updates automatically every 3 hours.

If you like this project feel free to buy me a coffee or ⭐ this repo :)

## Features

- Works on every operating system ✅
- Easy to use 💯
- Blazing Fast ⚡
- Many bug fixes 🐛

## Requirements

- NodeJS >= 15.0

## How to use

First, install habbo-downloader:

```bash
npm i -g habbo-downloader
```

After installation, you can start the script by typing `habbo-downloader` **or the shorthand** `hdl` into your terminal and specifing a command.  
**Also check out [some examples](#examples) to get started!**

```bash
habbo-downloader --command [COMMAND NAME]
```

## Options

Here is a list of all currently available options.

#### REQUIRED

```
-c OR --command [COMMAND NAME]  
```

Defines the command to execute. See below the list of all available commands.

#### OPTIONAL

```
-o OR --output [VALUE]
```  

Defines the output folder for the downloaded files.

**Default**: `./resource`  
**Value**: `Any valid path works`


```
-d OR --domain [VALUE]
```  

Defines from which domain the files should be downloaded.  

**Default**: `com`  
**Value**: `com.br, com.tr, com, de, es, fi, fr, it, nl`

```
-r OR --revision
```  

If specified, downloads furnitures and furniture icons inside of the revision
folder else downloads directly to `dcr/hof_furni`

**Default**: `-`  
**Value**: `-`

```
-f OR --format [VALUE]
```  

Which format to use when downloading badges. Habbo now by default use PNG for their badges.  
However you can still use GIF if you prefer that.

**Default**: `png`  
**Value**: `png or gif`

```
-s OR --sockets [VALUE]
```

Maximal amount of open sockets to server. Increasing this value can improve download performance but  
**a too high value can result in blocked requests** becuase of Habbos DDOS protection.  

**Default**: `100`  
**Value**: `Any number is valid`

## Commands

This is a list of all currently implemented commands. Please note that this project is still a **work in progress**.

|     Command     |                        Description                        |
| --------------- | --------------------------------------------------------- |
| articles        | Download all Habbo News Article Images                    |
| badgeparts      | Download all Habbo Badgeparts Images                      |
| badges          | Download all Habbo Badges                                 |
| clothes         | Download all Habbo Clothes                                |
| effects         | Download all Habbo Effects                                |
| ficons          | Download all Habbo Furniture Icons                        |
| furnitures      | Download all Habbo Furnitures + Icons                     |
| gamedata        | Download all Habbo Gamedata                               |
| gordon          | Download all Habbo Gordon Files                           |
| habboswf        | Download the latest Habbo.swf                             |
| hotelview       | Download all Habbo Hotelview Images                       |
| icons           | Download all Habbo Catalogue Icons                        |
| mp3             | Download all Habbo MP3 Files (sound_machine_sample)       |
| pets            | Download all Habbo Pets                                   |
| promo           | Download all Habbo Web Promo Images                       |


## HABBO 2020 (Unity WebGL)

If you want to download unity files of **Habbo 2020** simply pass the option `--unity` or `-u` along.

These commands support downloading unity files

|     Command     |                        Description                        |
| --------------- | --------------------------------------------------------- |
| clothes         | Download all Unity Clothes                                |
| effects         | Download all Unity Effects                                |
| furnitures      | Download all Unity Furnitures                             |

## Examples

Simple example:

```bash
habbo-downloader --command icons
```

You also can use the shorthand version:

```bash
hdl -c icons
```

Downloading from a different domain, for example: www.habbo.es

```bash
hdl -c gamedata -d es
```

Downloading Unity WebGL furniture files

```bash
hdl -c furnitures -u
```

## FAQ

**Q**: I get this error: `Error: Cannot find module 'stream/promises'`  
**A**: Make sure you have NodeJS version **15.0 or higher** installed. You can check what version your using by typing `node -v` in your terminal.
