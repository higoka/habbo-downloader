const { fetchText } = require('./functions')

let prod

async function parseProduction () {
  const txt = await fetchText('https://www.habbo.com/gamedata/external_variables/0')
  prod = txt.match(/(?<=flash\.client\.url).*(PRODUCTION-[^\/]+)/mi)[1]
  return prod
}

function getProduction () {
  return prod
}

module.exports = { parseProduction, getProduction }
