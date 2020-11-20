const { fetchText } = require('./functions')
const parser = require('fast-xml-parser')

let prod = false

async function getProduction () {
  if (prod === false) {
    prod = (await fetchText('https://www.habbo.com/gamedata/external_variables/0')).match(/(?<=flash\.client\.url).*(PRODUCTION-[^\/]+)/mi)[1]
  }

  return prod
}

let domain = 'com'

async function setDomain (d) {
  domain = d
}

async function getDomain () {
  return domain
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

module.exports = { getProduction, parseXml, getDomain, setDomain }
