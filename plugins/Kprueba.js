let moment = require('moment-timezone')
let handler = async (m, { conn}) => {
    let {registered } = global.db.data.users[m.sender]
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    conn.sendButton(m.chat, `${ucapan()}, *${name}*`, `_Presione el botón "VPS" para ver las opciones_\n\nᴡᴀʟʟ•🅔 ᴮᴼᵀ`, 'VPS', `.vps`)
}

handler.customPrefix = /^(kevin)$/i
handler.command = new RegExp
handler.group = true
handler.disabled= false

module.exports = handler

function ucapan() {
    const time = moment.tz('America/Guayaquil').format('HH')
    if (time >= 00) {
      res = "Buenos días"
    }
    if (time >= 12) {
      res = "Buenas tardes"
    }
    if (time >= 18) {
      res = "Buenas noches"
    }
    return res
  }