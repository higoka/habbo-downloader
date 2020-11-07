const { fetchText } = require('./functions')
const parser = require('fast-xml-parser')

let prod

async function parseProduction () {
  const txt = await fetchText('https://www.habbo.com/gamedata/external_variables/0')
  prod = txt.match(/(?<=flash\.client\.url).*(PRODUCTION-[^\/]+)/mi)[1]
  return prod
}

function getProduction () {
  return prod
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

module.exports = { parseProduction, getProduction, parseXml }
