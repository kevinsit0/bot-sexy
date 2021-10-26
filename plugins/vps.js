let handler = async (m, { conn,usedPrefix }) => {
    conn.fakeReply(m.chat, 'media/sticker/1.webp',
'0@s.whatsapp.net',
'𝖜𝖆𝖑𝖑𝖊 🤖 𝖇𝖔𝖙'
.trim()) 
}
handler.command = /^vps$/i
handler.group = true

module.exports = handler