const { fetchOne } = require('./functions')

async function main () {
  try {
    const res = await fetchOne('https://www.habbo.com/gamedata/external_variables/0', 'resource/gamedata/external_variables.txt')
    console.log(res)
  } catch (err) {
    console.error(err)
  }
}

main()
