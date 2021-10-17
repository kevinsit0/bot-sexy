let handler = async (m, { conn }) => {
    conn.sendFile(m.chat/ 'media/sticker/Botk.webp'/ 'media/sticker/Bot2.webp'/ '', m)
}

handler.customPrefix = /^bot$/i
handler.command = new RegExp

module.exports = handler
