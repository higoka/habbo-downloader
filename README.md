# habbo-downloader

![GitHub release (latest by date)](https://img.shields.io/github/v/release/higoka/habbo-downloader?style=for-the-badge)
![Size](https://img.shields.io/github/languages/code-size/higoka/habbo-downloader?color=limegreen&label=size&style=for-the-badge)
![GitHub](https://img.shields.io/github/license/higoka/habbo-downloader?color=orangered&style=for-the-badge)

A tiny script to download various files directly from Habbo.

***Discord***
`higoka#7120`

![](preview.gif)

## Prerequisites

- PHP 7 or higher

## Getting Started

Just execute the correct `run` file for your os.

- `run.bat` **for Windows**
- `run.command` **for macOS**

After the initial required files have been downloaded a prompt will let you enter a command.

### Available Commands

- badges
- furnitures
- clothes
- effects
- icons
- mp3
- pets
- badgeparts
- hotelview
- ficon
- gamedata
- habboswf

**If you have ideas for new commands or projects let me know.**

## FAQ

### Unable to find the wrapper “https” - did you forget to enable it when you configured PHP?

**Solution**: Enable the `php_openssl` extension.  
In your php.ini search for: `extension=php_openssl` and remove the semicolon ( `;` ) then restart PHP.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
