let handler = async (m, { conn, participants }) => {
  // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply('Bot muerto en este grupo!')
  // } else m.reply('Ada nomor host disini...')
}
handler.help = ['banchat1']
handler.tags = ['owner']
handler.command = /^banchat$/i
handler.owner = true

module.exports = handler