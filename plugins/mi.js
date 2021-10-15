let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/mi.opus', '', 'xd', m)
}
handler.help = ['mi']
handler.tags = ['premium']
handler.command = /^(mi)$/i
handler.group = true
handler.register = false

module.exports = handler
