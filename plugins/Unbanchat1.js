let handler = async (m, { conn }) => {
	// if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
  global.db.data.chats[m.chat].isBanned = false
  m.reply('Bot de regreso al grupo!')
  // } else m.reply('Ada nomor host disini...')
}
handler.help = ['unbanchat1']
handler.tags = ['owner']
handler.command = /^unbanchat$/i
handler.owner= true

module.exports = handler
