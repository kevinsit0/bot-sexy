let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
	let url = anime[Math.floor(Math.random() * anime.length)]
	await conn.sendMessage(m.chat, {
		contentText: '*TE VA A CAER LA POLICÍA 🚔️*',
		footerText: '©The Shadow Brokers - Bot',
		buttons: [
			{ buttonId: '.nick', buttonText: { displayText: 'SIGUIENTE' }, type: 1 }
		],
		headerType: 4,
		imageMessage: (await conn.prepareMessageMedia(await (await fetch(url)).buffer(), 'imageMessage', {})).imageMessage
	}, 'buttonsMessage', { quoted: m })
}
handler.command = /^(bienvenido)$/i
handler.tags = ['internet']
handler.help = ['bienvenido']
module.exports = handler

