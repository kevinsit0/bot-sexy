let handler = async (m, { conn }) => {
    conn.sendFile(m.chat,'media/sticker/Bot.webp', '', 'hola', m)
}

handler.customPrefix = /^kevin?$/i
handler.command = new RegExp

module.exports = handler
