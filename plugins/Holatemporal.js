let handler = m => m.reply('*Hola👋 te has comunicado con _aire de fiesta_
Que deseas?
globos
piñateria
florero*')

handler.customPrefix = /^(Hola)$/i
handler.command = new RegExp
handler.private = true
handler.group = true

module.exports = handler