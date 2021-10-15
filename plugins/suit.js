let handler = async (m, { text, usedPrefix }) => {
    let poin = 300
    let salah = `Opciones disponibles tijera, papel, piedra\n\n*Ejemplo* : ${usedPrefix}suit tijera\n`
    if (!text) throw salah
    var suit = Math.random()

    if (suit < 0.34) {
        suit = 'piedra'
    } else if (suit > 0.34 && suit < 0.67) {
        suit = 'tijera'
    } else {
        suit = 'papel'
    }

    //menentukan rules
    if (text == suit) {
      global.db.data.users[m.sender].exp += 100
        m.reply(`*Empate*\n\nUsted : ${text}\nBot : ${suit}\n\nPuntos (±)100 XP`)
    } else if (text == 'piedra') {
        if (suit == 'tijera') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`*Tú ganas*\n\nUsted : ${text}\nBot : ${suit}\n\nPuntos (+)${poin} XP`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`*Tú pierdes*\n\nUsted : ${text}\nBot : ${suit}\n\nPuntos (-)${poin} XP`)
        }
    } else if (text == 'tijera') {
        if (suit == 'papel') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`*Tú ganas*\n\nUsted : ${text}\nBot : ${suit}\n\nPuntos (+)${poin} XP`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`*Tú pierdes*\n\nUsted : ${text}\nBot : ${suit}\n\nPuntos (-)${poin} XP`)
        }
    } else if (text == 'papel') {
        if (suit == 'piedra') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`*Tú ganas*\n\nUsted : ${text}\nBot : ${suit}\n\nPuntos (+)${poin} XP`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`*Tú pierdes*\n\nUsted : ${text}\nBot : ${suit}\n\nPuntos (-)${poin} XP`)
        }
    } else {
        throw salah
    }
}
handler.help = ['suit tijera/piedra/papel']
handler.tags = ['game']
handler.command = /^suit$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = false
handler.admin = false
handler.botAdmin = false

module.exports = handler