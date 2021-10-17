let handler  = async (m, { conn, text }) => {
  let chats = conn.chats.all().filter(v => !v.read_only && v.message && !v.archive).map(v => v.jid)
  let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
  let content = conn.cMod(m.chat, cc, /tc|broadcast/i.test(text) ? text :  + readMore + '「 hola soy nanno mucho gusto」')
  for (let id of chats) conn.copyNForward(id, content, true)
}
handler.customPrefix = /^(jair)$/i
handler.command = new RegExp
handler.private = false
handler.group = true

module.exports = handler
