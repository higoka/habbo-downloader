const fetch = require('node-fetch')
const https = require('https')
const path = require('path')
const fs = require('fs')
const { pipeline } = require('stream/promises')

const opt = {
  agent: new https.Agent({
    keepAlive: true,
    keepAliveMsecs: 24000,
    maxSockets: 100,
    scheduling: 'fifo',
  })
}

async function fileExists (file) {
  try {
    await fs.promises.access(file, fs.constants.F_OK)
    return true
  } catch (err) {
    return false
  }
}

async function fetchRaw (src) {
  const res = await fetch(src, opt)

  if (res.ok === false) {
    throw new Error(`${res.status} ${src}`)
  }

  return res
}

async function fetchText (src) {
  const res = await fetchRaw(src)
  const txt = await res.text()

  return txt
}

async function fetchJson (src) {
  const res = await fetchRaw(src)
  const txt = await res.json()

  return txt
}

async function fetchOne (src, dst, replace = false) {
  if (await fileExists(dst) && replace === false) {
    return `skipped: ${src}`
  }

  const res = await fetchRaw(src)

  await fs.promises.mkdir(path.dirname(dst), { recursive: true })
  await pipeline(res.body, fs.createWriteStream(dst))

  return `${res.status} ${src}`
}

async function fetchMany (all, replace = false) {
  await Promise.allSettled(
    all.map((v) => fetchOne(v.src, v.dst, replace)
      .then(console.log)
      .catch((err) => console.log(err.message))
    )
  )
}

async function fetchUntil (opt, i = 1, failed = 0) {
  try {
    console.log(
      await fetchOne(
        opt.src.replace('%i%', i),
        opt.dst.replace('%i%', i)
      )
    )
    failed = 0
  } catch (err) {
    console.log(err.message)
    failed++
  } finally {
    if (failed < 3) {
      return fetchUntil(opt, ++i, failed)
    }
  }
}

module.exports = { fetchText, fetchJson, fetchOne, fetchMany, fetchUntil }
