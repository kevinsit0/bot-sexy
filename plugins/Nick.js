let handler = m => m.reply('*Hola👋que tal soy 👿𝐛𝐨𝐭-𝐧𝐚𝐧𝐧𝐨😈 ten las iniciales* ,    *ABDㅤNICK*')

handler.customPrefix = /^(nick)$/i
handler.command = new RegExp
handler.private = false
handler.group = true

module.exports = handler
