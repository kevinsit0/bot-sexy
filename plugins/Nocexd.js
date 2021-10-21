let handler = async (m, { conn }) => {
await conn.sendFile(m.chat, '_Test de velocidad..._', '0@s.whatsapp.net', '👿𝐛𝐨𝐭-𝐧𝐚𝐧𝐧𝐨😈')
  }
 handler.customPrefix = /^kevin?$/i
handler.command = new RegExp

module.exports = handler