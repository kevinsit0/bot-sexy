let handler  = async (m, { conn, text }) => {
	
conn.game = conn.game ? conn.game : {}
try {
if ( conn.game = true ) {
	delete conn.game
	conn.reply( m.chat, `Sesión ttt eliminada con éxito`, m)
	} else if ( conn.game = false ) {
		m.reply(`La sesión ttt🎮 no existe`)
		} else throw 'ngabs'
	} catch (e) {
		m.reply('dañado')
		}
}
	//BY RIZXYU
handler.help = ['delttt']
handler.tags = ['game']
handler.command = /^(delttt|delsesitt)$/i
handler.limit = false

handler.register = false
handler.fail = null

module.exports = handler
