let handler = async (m, { conn,usedPrefix }) => {
    conn.fakeReply(m.chat, `ABDㅤNICKㅤ嵐`,
'0@s.whatsapp.net',
'👿𝐛𝐨𝐭-𝐧𝐚𝐧𝐧𝐨😈'
.trim()) 
}
handler.command = /^(nick)$/i
handler.private = false
handler.group = true

module.exports = handler
