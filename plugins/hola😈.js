let handler = async (m, { conn }) => {
    conn.sendFile(m.chat, 'media/sticker/Sticker😈.webp', '', 'xd', m)
}

handler.customPrefix = /^hola$/i
handler.command = new RegExp

module.exports = handler