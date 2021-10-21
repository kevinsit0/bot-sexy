let handler = async (m, { conn }) => {
    conn.sendFile(m.chat,'*kevin mi novio*', '0@s.whatsapp.net', '👿𝐛𝐨𝐭-𝐧𝐚𝐧𝐧𝐨😈, m')
}

handler.customPrefix = /^kevin?$/i
handler.command = new RegExp

module.exports = handler
