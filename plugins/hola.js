conn.fakeReply(m.chat, '*holaaa*', '0@s.whatsapp.net', '👿𝐛𝐨𝐭-𝐧𝐚𝐧𝐧𝐨😈')

handler.customPrefix = /^(Hola)$/i 
handler.command = new RegExp
handler.private = false
handler.group = true

module.exports = handler