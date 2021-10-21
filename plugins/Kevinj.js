let handler = async(m, { conn, usedPrefix: _p }) => {
conn.fakeReply(m.chat, '*kevinsisksksk⏳*', '0@s.whatsapp.net', '👿𝐛𝐨𝐭-𝐧𝐚𝐧𝐧𝐨😈')

handler.customPrefix = /^(kevin)$/i
handler.command = new RegExp
handler.private = false
handler.group = true

module.exports = handler
