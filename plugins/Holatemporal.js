let handler = m => m.reply('*Hola👋 te has comunicado con _aire de fiesta_ , que deseas? tengo florero*')





handler.customPrefix = /^(Hola)$/i
handler.command = new RegExp
handler.private = true


module.exports = handler
