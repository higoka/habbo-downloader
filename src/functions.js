const fetch = require('node-fetch')
const fs = require('fs')
const path = require('path')
const https = require('https')
const { pipeline } = require('stream/promises')

const opt = {
  agent: new https.Agent({
    keepAlive: true,
    maxSockets: 100,
  })
}

async function fetchRaw (src) {
  const res = await fetch(src, opt)

  if (res.ok === false) {
    throw new Error(`failed to fetch "${src}", status: ${res.status}`)
  }

  return await res.text()
}

async function fetchOne (src, dst) {
  const res = await fetch(src, opt)

  if (res.ok === false) {
    throw new Error(`failed to fetch "${src}", status: ${res.status}`)
  }

  await fs.promises.mkdir(path.dirname(dst), { recursive: true })
  await pipeline(res.body, fs.createWriteStream(dst))

  console.log('ok')

  return res
}

async function fetchMany (all) {
  await Promise.allSettled(
    all.map((v) => fetchOne(v.src, v.dst).catch(console.log))
  )

  console.log('all')
}

module.exports = { fetchRaw, fetchOne, fetchMany }
