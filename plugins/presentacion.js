let handler = m => m.reply('*Hola👋 soy bot sexy 🌚 asistente personal de kevin* , *Un Bot de WhatsApp es un programa de chatbot o software que se puede utilizar específicamente en la popular aplicación de mensajería encriptada WhatsApp. Un Bot de WhatsApp te introduce en el mundo del marketing conversacional y te ayuda a administrar los problemas de tus clientes.*')

handler.customPrefix = /^(presentar)$/i
handler.command = new RegExp
handler.private = false
handler.group = true

module.exports = handler
