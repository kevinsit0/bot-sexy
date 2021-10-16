const fetch = require('node-fetch')
const FormData = require('form-data')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
  let RendyGanteng = conn
  await RendyGanteng.fakeReply(m.chat, '*ESPERA⌛*', '0@s.whatsapp.net', '👿𝐛𝐨𝐭-𝐧𝐚𝐧𝐧𝐨😈')
  if (!text) throw 'Uhm... y el texto?'
  conn.sendFile(m.chat, global.API('xteam', '/attp', { file: '', text: text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text }), 'attp.webp', '', m, false, { asSticker: true })
}
handler.help = ['attp *texto*']
handler.tags = ['sticker']
handler.command = /^attp$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

