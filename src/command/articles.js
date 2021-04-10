const { fetchMany, fetchText } = require('../functions')

const regex = /src=".*habbo-web-articles\/([^"]+\.png)".+(?=class="news-header__image news-header__image--thumbnail">)/gmi

async function parse (txt) {
  const all = []
  const match = [
    ...txt.matchAll(regex)
  ]

  match.forEach((match) => {
    all.push(match[1])
    all.push(match[1].replace('_thumb.png', '.png'))
  })

  return all
}

async function handle () {
  let failed = 0
  let i = 1

  while (failed < 3) {
    try {
      const txt = await fetchText(`https://images.habbo.com/habbo-web-news/en/production/all_${i++}.html`)
      const all = await parse(txt)

      await fetchMany([...all].map((item) => {
        return {
          src: `https://images.habbo.com/web_images/habbo-web-articles/${item}`,
          dst: `habbo-web-articles/${item}`
        }
      }))

      failed = 0
    } catch (err) {
      failed++
    }
  }
}

module.exports = handle
