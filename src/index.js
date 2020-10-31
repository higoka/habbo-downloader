const handle = require('./command/icon')
const { fetchMany } = require('./functions')

async function main () {
  await handle()

  // test error handling 404 not found
  // await fetchMany([
  //   { src: 'https://images.habbo.com/c_images/catalogue/icon_100.png', dst: 'icon_100.png' },
  //   { src: 'https://images.habbo.com/c_images/catalogue/icon_XYZ.png', dst: 'icon_XYZ.png' },
  //   { src: 'https://images.habbo.com/c_images/catalogue/icon_200.png', dst: 'icon_200.png' },
  // ])

  console.log('done')
}

main()
