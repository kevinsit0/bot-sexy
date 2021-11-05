let handler = async (m, { conn }) => {
    conn.sendFile(m.chat, 'media/sticker/Stikerª.webp', '', 'xd', m)
}

handler.customPrefix = /^ª$/i
handler.command = new RegExp

module.exports = handler