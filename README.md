<!-- markdownlint-disable first-line-h1 -->

<h1 align="center">Welcome to ignore-files 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/ignore-files" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/ignore-files.svg">
  </a>
  <a href="https://github.com/hata6502/ignore-files/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/hata6502/ignore-files" />
  </a>
  <a href="https://twitter.com/hata6502" target="_blank">
    <img alt="Twitter: hata6502" src="https://img.shields.io/twitter/follow/hata6502.svg?style=social" />
  </a>
</p>

> A CLI to ignore files by .\*ignore.

## Install

```bash
npm install -g ignore-files
```

## Usage

```bash
$ zsh -c "echo **/*.ts" | ignore .gitignore
src/index.ts
```

To use `bash` only, use [globstar](https://www.linuxjournal.com/content/globstar-new-bash-globbing-option).

## Application

For tools that don't support `.*ignore`

```bash
verilator --lint-only -Wall $(echo **/*.v | ignore .gitignore)
```

## Build

```bash
npx tsc
```

## Format

```bash
npm run fix
```

## Run tests

```bash
npm test
```

## Author

<img alt="Tomoyuki Hata" src="https://avatars.githubusercontent.com/hata6502" width="48" /> **Tomoyuki Hata**

- Website: [Scrapbox](https://scrapbox.io/hato6502-50664244/)
- Twitter: [@hata6502](https://twitter.com/hata6502)
- Github: [@hata6502](https://github.com/hata6502)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/hata6502/ignore-files/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [Tomoyuki Hata](https://github.com/hata6502).<br />
This project is [MIT](https://github.com/hata6502/ignore-files/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
