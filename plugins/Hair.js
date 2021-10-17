let handler = async (m, { conn, usedPrefix: _p }) => {
  conn.fakeReply(m.chat, '*Hola👋 soy bot sexy 🌚??* , *En que te puedo ayudar¿?*_Escribe_ *#help* o *#Menú* _para que puedas ver mis funciones_ .*', '0@s.whatsapp.net', '👿𝐛𝐨𝐭-𝐧𝐚𝐧𝐧𝐨😈')

handler.customPrefix = /^(jair)$/i
handler.command = new RegExp
handler.private = false
handler.group = true

module.exports = handler