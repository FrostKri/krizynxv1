let fs = require('fs')

global.owner = ['62895328590064','62895327934887'] // Put your number here
global.mods = [] // Want some help?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json'))
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  melcanz: 'httpa://melcanz.com',
  lol: 'https://api.lolhuman.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'apivproject',
  'https://melcanz.com': 'elaina',
  'https://api.lolhuman.xyz': 'pkebgk8248jskrkfm',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.stiker_wait = 'โณ ๐๐ผ๐๐, ๐๐๐ฟ๐ผ๐๐ ๐ฟ๐๐๐๐๐๐๐...'
global.packname = '๐๐ง๐๐ฏ๐ฎ๐ฃรอร'
global.author = 'by แดนแดฟ๐๐ฉ๐จ๐ ๐ง๐ รแึอร '

global.wm = '๐๐ง๐๐ฏ๐ฎ๐ฃรอร'
global.botwm = '๐๐ง๐๐ฏ๐ฎ๐ฃ๐๐รอร'
global.watermark = '๐๐ง๐๐ฏ๐ฎ๐ฃรอร'
global.media = fs.readFileSync('./src/krizyn.jpg')
global.donasi = fs.readFileSync('./src/payment.jpg')

global.wait = 'โณ ๐๐ผ๐๐, ๐๐๐ฟ๐ผ๐๐ ๐ฟ๐๐๐๐๐๐๐...'
global.eror = 'โ๐๐๐ง๐ซ๐๐ง ๐๐ง๐ง๐ค๐ง...'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

global.multiplier = 99 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: 'โ๏ธ',
      money: '๐ต',
      potion: '๐ฅค',
      diamond: '๐',
      common: '๐ฆ',
      uncommon: '๐',
      mythic: '๐ณ๏ธ',
      legendary: '๐๏ธ',
      pet: '๐',
      sampah: '๐',
      armor: '๐ฅผ',
      sword: 'โ๏ธ',
      kayu: '๐ชต',
      batu: '๐ชจ',
      string: '๐ธ๏ธ',
      kuda: '๐',
      kucing: '๐' ,
      anjing: '๐',
      petFood: '๐',
      gold: '๐',
      emerald: '๐'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
