const { fetchText } = require('./functions')
const parser = require('fast-xml-parser')

const conf = {
  sockets: 100,
  domain: 'com',
  prod: false,
}

async function initConfig (argv) {
  const d = argv.d || argv.domain
  const s = argv.s || argv.sockets

  if (d) conf.domain = d
  if (s) conf.sockets = s

  conf.prod = (await fetchText(`https://www.habbo.${conf.domain}/gamedata/external_variables/0`)).match(/(?<=flash\.client\.url).*(PRODUCTION-[^\/]+)/mi)[1]
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

module.exports = { initConfig, config, parseXml }
