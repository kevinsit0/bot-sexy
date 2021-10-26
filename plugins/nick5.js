let handler = async (m, { conn,usedPrefix }) => {
    conn.fakeReply(m.chat, `espera estoy buscando las iniciales
'0@s.whatsapp.net',
'👿𝐛𝐨𝐭-𝐧𝐚𝐧𝐧𝐨😈'
'espera estoy buscando kevin'
.trim()) 
}
handler.command = /^nick5$/i
handler.group = true

module.exports = handler