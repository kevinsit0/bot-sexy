let handler = async (m, { conn }) => {
    conn.sendFile(m.chat, 'media/sticker/Xd😂.webp', '', 'xd', m)
}

handler.customPrefix = /^xd$/i
handler.command = new RegExp

module.exports = handler