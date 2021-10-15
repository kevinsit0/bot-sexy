let handler  = async (m, { conn }) => {

       conn.sendFile(m.chat, 'media/Onicha.m4a', '', 'xd', m)

}

handler.help = ['oni']

handler.tags = ['premium']

handler.command = /^(oni)$/i

handler.group = true

handler.register = false

module.exports = handler

