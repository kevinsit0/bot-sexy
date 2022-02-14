let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
	let url = anime[Math.floor(Math.random() * anime.length)]
	await conn.sendMessage(m.chat, {
		contentText: '*HOLA BIENVENID@ BUSCABAS LAS INICIALES O EL CANAL DEL DISCORD*',
		footerText: '©The Shadow Brokers - Bot',
		buttons: [
			{ buttonId: '.bienvenido', buttonText: { displayText: 'canal' }, type: 1 }
		],
		headerType: 4,
		imageMessage: (await conn.prepareMessageMedia(await (await fetch)(), 'imageMessage', {})).imageMessage
	}, 'buttonsMessage', { quoted: m })
}
handler.customPrefix = /^(nick|iniciales|server|servidores|server|vps|servi|servidor|servÃ­)$/i
handler.command = new RegExp
handler.group = true
handler.disabled= false
module.exports = handler

