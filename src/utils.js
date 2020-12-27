const { fetchText, fetchJson } = require('./functions')
const parser = require('fast-xml-parser')
const compareVersions = require('compare-versions')
const package = require('../package.json')

const conf = {
  sockets: 100,
  domain: 'com',
  format: 'png',
  prod: false,
}

async function initConfig (argv) {
  const c = argv.c || argv.command
  const d = argv.d || argv.domain
  const s = argv.s || argv.sockets
  const f = argv.f || argv.format

  if (d) conf.domain = d
  if (s) conf.sockets = s

  if (c === 'badges' && f === 'gif') {
    conf.format = 'gif'
  }

  conf.prod = (await fetchText(`https://www.habbo.${conf.domain}/gamedata/external_variables/0`)).match(/(?<=flash\.client\.url).*(PRODUCTION-[^\/]+)/mi)[1]
}

async function checkUpdate () {
  const json = await fetchJson('https://registry.npmjs.org/habbo-downloader/latest')
  if (compareVersions(json.version, package.version) > 0) {
    console.log(`\u001b[33m[NOTE] A new version is available: "${json.version}". You are using version: "${package.version}". Please update habbo-downloader by running "npm i -g habbo-downloader" inside of the terminal.\u001b[0m\n`)
  }
}

async function config (key = false) {
  return key ? conf[key] : conf
}

async function parseXml (txt) {
  if (parser.validate(txt) !== true) {
    throw new Error('invalid xml')
  }

  return parser.parse(txt, {
    ignoreAttributes: false,
    parseAttributeValue: false,
    parseNodeValue: false,
  })
}

module.exports = { initConfig, checkUpdate, config, parseXml }
