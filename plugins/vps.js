let handler = async (m, { conn,usedPrefix }) => {
    conn.sendFile(m.chat, 'media/sticker/1.webp',
'0@s.whatsapp.net',
'👿𝐛𝐨𝐭-𝐧𝐚𝐧𝐧𝐨😈'
.trim()) 
}
handler.command = /^vps$/i
handler.group = true

module.exports = handler
