const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `*ESTAS REGISTRADO* ✅\n\nQuieres volver a registrarte?\n ${usedPrefix}unreg SN|NÚMERO DE SERIE`
  if (!Reg.test(text)) throw `Formato incorrecto\n*${usedPrefix}reg nombre.edad*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Los nombres no pueden estar vacíos (alfanumérico)'
  if (!age) throw 'La edad no puede estar en blanco (números)'
  age = parseInt(age)
  if (age > 80) throw 'Edad demasiado vieja 😂😂'
  if (age < 5) throw 'Los bebés pueden escribir según el formato bjir ._.'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
*REGISTRO EXITOSO* ✅
╭─「 Info 」
│ *Nombre🔥:* ${name}
│ *Edad🔥:* ${age} años
│ *SN🔥:* ${sn}
╰────

`.trim())
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['exp']

handler.command = /^(reg(istrar)?)$/i

module.exports = handler
