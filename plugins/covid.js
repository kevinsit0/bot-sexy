let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let res = await fetch(global.API('https://covid19.mathdro.id', '/api/countries/'+ (text)))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.confirmed) throw 'País?'
  if (json.confirmed) m.reply(`
País : ${text}
Confirmados : ${json.confirmed.value}
Recuperados : ${json.recovered.value}
Fallecidos : ${json.deaths.value}
Última actualización : ${json.lastUpdate}`.trim())
  else throw json
}
handler.help = ['covid'].map(v => v + ' <país>')
handler.tags = ['internet']
handler.command = /^(corona|covid|covid19)$/i
//susu
module.exports = handler
