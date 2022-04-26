global.owner = ['593995257244', '593960841123', '593964163489'] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
  zenz: 'https://zenzapi.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'cristian9407',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
  'https://zenzapi.xyz': '110cd11dc6'
}

// Sticker WM
global.packname = '👿𝐛𝐨𝐭-𝐧𝐚𝐧𝐧𝐨😈'
global.author = 'kevin'

global.wait = '*⌛ _Procesando..._ ▬▬▬▭*'
global.eror = '「❗」Server ERROR!'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='
global.watermark = '© 𝐛𝐨𝐭-𝐧𝐚𝐧𝐧𝐨'
global.image = 'https://telegra.ph/file/63560c3d19d6bcce228f5.jpg'
global.thumbfoto = 'https://telegra.ph/file/39bbded9693c9338069fd.jpg'

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
