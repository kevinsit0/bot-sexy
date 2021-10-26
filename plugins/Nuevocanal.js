let handler = async (m, { conn,usedPrefix }) => {
    conn.fakeReply(m.chat, `╭────❲ *CLAN:嵐ABDHILL嵐* ❳────╮
├┉┉┉┉↯❏ *Discord:* ❏↯┉┉┉
https://discord.gg/Zen6DQeVT6                             
├┉┉┉┉↯❏  *Instagram:* ❏↯┉┉┉┉
https://instagram.com/abd_hill666/
├┉┉┉┉↯❏  *YouTube:* ❏↯┉┉┉┉
https://youtube.com/channel/UClDujRkM1VL92uhhUGcDwRQ
╰────❲ *👿𝐛𝐨𝐭-𝐧𝐚𝐧𝐧𝐨😈* ❳────╯`,
'0@s.whatsapp.net',
'👿𝐛𝐨𝐭-𝐧𝐚𝐧𝐧𝐨😈'
.trim()) 
}
handler.customPrefix = /^(canal)$/i
handler.command = new RegExp
handler.private = false
handler.group = true

module.exports = handler