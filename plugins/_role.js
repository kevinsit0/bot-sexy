let handler = m => m

handler.before = function (m) {
  let user = global.db.data.users[m.sender]
        let role = (user.level <= 10) ? 'Novato'
          : ((user.level >= 10) && (user.level <= 20)) ? 'Veterano'
          : ((user.level >= 20) && (user.level <= 30)) ? 'Élite'
          : ((user.level >= 30) && (user.level <= 40)) ? 'Profesional I'
          : ((user.level >= 40) && (user.level <= 50)) ? 'Profesional II'
          : ((user.level >= 50) && (user.level <= 60)) ? 'Maestro I'
          : ((user.level >= 60) && (user.level <= 70)) ? 'Maestro II'
          : ((user.level >= 70) && (user.level <= 80)) ? 'Maestro III'
          : 'Legenda'
  user.role = role
  return true
}

module.exports = handler
