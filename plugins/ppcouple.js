let fetch = require("node-fetch")

let handler = async (m, { conn }) => {
  let res = await fetch(global.API('LeysCoder', '/api/ppcouple', {}, 'apikey'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
  await conn.sendFile(m.chat, json.result.male, '', 'chico', m)
  await conn.sendFile(m.chat, json.result.female, '', 'chica', m)
}
handler.help = ['pp', 'pareja']
handler.tags = ['internet']
handler.command = /^(pp|pareja)$/i
handler.register = false
handler.group = true

module.exports = handler