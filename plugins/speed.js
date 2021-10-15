let { performance } = require('perf_hooks')
let handler = async (m, { conn }) => {
  let old = performance.now()
  await conn.fakeReply(m.chat, '_Test de velocidad..._', '0@s.whatsapp.net', '✨𝐛𝐨𝐭-𝒔𝒆𝒙𝒚✨')
  let neww = performance.now()
  m.reply(neww - old + ' ms')
}
handler.help = ['ping', 'speed']
handler.tags = ['info', 'tools']

handler.command = /^(ping|speed)$/i
module.exports = handler