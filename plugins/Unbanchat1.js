let handler = async (m, { conn }) => {
  global.db.data.chats[m.chat].isBanned = false
  m.reply('Bot de regreso al grupo!')
}
handler.help = ['unbanchat1']
handler.tags = ['owner']
handler.command = /^unbanchat1$/i
handler.owner,handler.mods = true

module.exports = handler
