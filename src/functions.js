const fetch = require('node-fetch')
const fs = require('fs')

function fetchOne (src, dst) {
  return new Promise(async (resolve, reject) => {
    const res = await fetch(src)

    if (res.ok === false) {
      return reject(`failed to fetch "${src}", status: ${res.status}`)
    }

    const file = fs.createWriteStream(dst)

    file.on('close', () => resolve(`downloaded: ${src}`))
    file.on('error', (err) => reject(err))

    res.body.pipe(file)
  })
}

module.exports = { fetchOne }
