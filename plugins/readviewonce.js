let handler = async (m, { conn, text }) => {
    if (!m.quoted) return conn.sendMessage(m.chat, 'donde está el mensaje?', 'conversacion')
    if (m.quoted.mtype !== 'viewOnceMessage') throw 'Eso no es un mensaje para verse una sola vez'
    await conn.copyNForward(m.chat, await conn.loadMessage(m.chat, m.quoted.id), false, { readViewOnce: true }).catch(_ => m.reply('Mungkin dah pernah dibuka bot'))
}

handler.help = ['readviewonce']
handler.tags = ['tools']

handler.command = /^readviewonce/i

module.exports = handler