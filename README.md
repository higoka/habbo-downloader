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
`-c or --command [COMMAND NAME] (furnitures, icons, badges, ...)`  
`-d or --domain [DOMAIN] (com, de, fr, it, ...)`    
`-s or --sockets [AMOUNT] (100, 200, ...)`

### Usage examples

```bash
habbo-downloader --command icons
```

Or use the shorthand version:

```bash
hdl -c icons
```

Downloading from www.habbo.es:

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
| icons           | Download all Habbo Catalogue Icons                        |

**FOR HABBO 2020**

|     Command     |                        Description                        |
| --------------- | --------------------------------------------------------- |
| furnitures20    | Download all Habbo 2020 Furnitures                        |
