let handler = async (m, { conn,usedPrefix }) => {
    conn.fakeReply(m.chat, `HOLA TE HAS COMUNICADO CON AIRE DE FIESTA


*QUE DESEAS?*
TENGO LO SIGUIENTE 👇
_juguetes_
_fiesta_
_globos_
_Florero_`,
'0@s.whatsapp.net',
'aire de fiesta'
.trim()) 
}
handler.customPrefix = /^(Hola)$/i
handler.command = new RegExp
handler.private = true

module.exports = handler