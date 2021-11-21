let handler = async (m, { conn }) => {
    conn.sendFile(m.chat, 'media/sticker/SNo.webp', '', 'xd', m)
}

handler.customPrefix = /^si|siu|simon|si bro^/i
handler.command = new RegExp

module.exports = handler
