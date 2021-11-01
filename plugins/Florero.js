let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/Florero.jpg', '', 'tengo este florero', m)
}
handler.customPrefix = /^(florero)$/i
handler.command = new RegExp
handler.private = true
handler.group = true

module.exports = handler