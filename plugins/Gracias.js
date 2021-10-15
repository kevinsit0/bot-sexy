let handler = async (m, { conn }) => {
    conn.sendFile(m.chat, 'media/sticker/1.webp', '', 'xd', m)
}

handler.customPrefix = /^gracias|thanks?$/i
handler.command = new RegExp

module.exports = handler
