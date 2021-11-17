let handler = function (m) {
  // this.sendContact(m.chat, '593 96 084 1123', 'Kevin', m)
  this.sendContact(m.chat, '593964163489', '🐉Kevin💎', m)
}
handler.help = ['owner', 'creador']
handler.tags = ['info']

handler.command = /^(owner|creador)$/i

module.exports = handler
