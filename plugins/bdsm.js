const { MessageType } = require('@adiwajshing/baileys')
const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    try {
        let res = await fetch(global.API('xteam', '/randomimage/bdsm', {}, 'APIKEY'))
        let img = await res.buffer()
        conn.sendMessage(m.chat, img, MessageType.image, {
            quoted: m, caption: '*ᴡᴀʟʟᴇ 🤖 ʙᴏᴛ*'
        })
    } catch (e) {
        console.log(e)
        throw '_*El propietario no ha pagado la factura de esta función.*_'
    }
}
handler.help = ['bdsm']
handler.tags = ['adultos']
handler.command = /^(bdsm)$/i
handler.owner = false
handler.mods = false
handler.group = false
handler.register = false
handler.private = true
handler.premium = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
