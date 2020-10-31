const fetch = require('node-fetch')
const https = require('https')
const path = require('path')
const fs = require('fs')
const { pipeline } = require('stream/promises')
const NotFoundError = require('./error/NotFound')

const opt = {
  agent: new https.Agent({
    keepAlive: true,
    maxSockets: 100,
  })
}

async function fetchRaw (src) {
  const res = await fetch(src, opt)
  // add error handling
  if (res.ok === false) {
    if (res.status === 404) {
      throw new NotFoundError(src)
    }
    throw new Error('oops')
  }

  return res
}

async function fetchText (src) {
  const res = await fetchRaw(src)
  const txt = await res.text()

  return txt
}

async function fetchOne (src, dst) {
  // try {
    const res = await fetchRaw(src)

    await fs.promises.mkdir(path.dirname(dst), { recursive: true })
    await pipeline(res.body, fs.createWriteStream(dst))

    console.log(`ok: ${src}`)
  // } catch (err) {
    // if (err instanceof NotFoundError) {
      // console.log('err', 404, err.message)
      // return 'a'
    // } else {
      // throw err
    // }
  // }
}

async function fetchMany (all) {
  await Promise.allSettled(
    all.map((v) => fetchOne(v.src, v.dst).catch(console.log))
  )

  console.log('all')
}

module.exports = { fetchText, fetchOne, fetchMany }
