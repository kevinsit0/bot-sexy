let handler = async (m, { conn }) => {
    conn.sendFile(m.chat, 'media/sticker/1.webp', '0@s.whatsapp.net', 'xd', m)
}

handler.customPrefix = /^kevin?$/i
handler.command = new RegExp

module.exports = handler