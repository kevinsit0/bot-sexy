let handler = m => m.reply('Hola👋 soy bot sexy ' , '0@s.whatsapp.net')

handler.customPrefix = /^(lala)$/i
handler.command = new RegExp
handler.private = false
handler.group = true

module.exports = handler