# habbo-downloader 2.0 (WORK IN PROGRESS)

### ❗ This is a work in progress. Use [habbo-downloader v1.x.x](https://github.com/higoka/habbo-downloader/tree/master) for a stable version ❗

A tiny script to download various files directly from Habbo.

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

After installation, you can start the script by typing `habbo-downloader` **or the shorthand** `hdl` into your terminal and specifing a command

```bash
habbo-downloader --command [COMMAND NAME]
```

### Options

Here is a list of all currently available options.

#### REQUIRED

```
-c OR --command [COMMAND NAME]  
```

Defines the command to execute. See below the list of all available commands.

#### OPTIONAL

```
-d OR --domain [DOMAIN]
```  

Defines from which domain the files should be downloaded.  

**Default**: `com`  
**Value**: `com.br, com.tr, com, de, es, fi, fr, it, nl`

```
-s OR --sockets [AMOUNT]
```

Maximal amount of open sockets to server. Increasing this value can improve download performance but  
a too high value can result in blocked requests becuase of Habbos DDOS protection.  

**Default**: `100`  
**Value**: `Any number is valid`

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

## Commands

This is a list of all currently implemented commands. Please note that this project is still a **work in progress**.

|     Command     |                        Description                        |
| --------------- | --------------------------------------------------------- |
| articles        | Download all Habbo News Article Images                    |
| badgeparts      | Download all Habbo Badgeparts Images                      |
| badges          | Download all Habbo Badges                                 |
| clothes         | Download all Habbo Clothes                                |
| effects         | Download all Habbo Effects                                |
| furnitures      | Download all Habbo Furnitures                             |
| gamedata        | Download all Habbo Gamedata                               |
| hotelview       | Download all Habbo Hotelview Images                       |
| icons           | Download all Habbo Catalogue Icons                        |

**FOR HABBO 2020**

|     Command     |                        Description                        |
| --------------- | --------------------------------------------------------- |
| furnitures20    | Download all Habbo 2020 Furnitures                        |
