const fetch = require('node-fetch')
const https = require('https')
const path = require('path')
const fs = require('fs')
const { pipeline } = require('stream/promises')

const opt = {
  agent: new https.Agent({
    keepAlive: true,
    maxSockets: 100,
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

async function fetchOne (src, dst) {
  if (await fileExists(dst)) {
    return `skipped: ${src}`
  }

  const res = await fetchRaw(src)

  await fs.promises.mkdir(path.dirname(dst), { recursive: true })
  await pipeline(res.body, fs.createWriteStream(dst))

  return `${res.status} ${src}`
}

async function fetchMany (all) {
  await Promise.allSettled(
    all.map((v) => fetchOne(v.src, v.dst)
      .then(console.log)
      .catch((err) => console.log(err.message))
    )
  )
}

module.exports = { fetchText, fetchOne, fetchMany }
