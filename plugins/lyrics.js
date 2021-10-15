// Pngocok handal

let fetch = require('node-fetch')
let handler  = async (m, { conn, text }) => {
  if (!text) conn.fakeReply(m.chat, 'Dondé está el texto?', '0@s.whatsapp.net', '*ᴡᴀʟʟᴇ 🤖 ʙᴏᴛ*')
  if (text) {
  let res = await fetch(global.API('https://some-random-api.ml', '/lyrics', {
    title: text
  }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.thumbnail.genius) throw json
  conn.sendFile(m.chat, json.thumbnail.genius, '', `
*${json.title}*
_${json.author}_\n
${json.lyrics}\n\n
${json.links.genius}
`, m)
}
}
handler.help = ['lirik'].map(v => v + ' *canicón*')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric)$/i
handler.register = false
handler.group = true

module.exports = handler
