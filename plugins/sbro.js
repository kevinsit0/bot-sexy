let handler = async (m, { conn }) => {
    conn.sendFile(m.chat, 'media/sticker/Bro.webp', '', 'xd', m)
}

handler.customPrefix = /^bro$/i
handler.command = new RegExp

module.exports = handler
