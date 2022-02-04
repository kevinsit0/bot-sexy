const { servidores, yta, ytv } = require('../lib/y2mate')
let yts = require('yt-buscar')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) lanza `¡Consulta de Harap masukkan!\n\nContoh: ${usedPrefix + command} yanagi nagi one's hope`
  let chat = global.db.data.chats[m.chat]
  dejar resultados = esperar yts (texto)
  let vid = resultados.todos.find(video => video.segundos < 3600)
  si (! vid) lanza 'Konten Tidak ditemukan'
  let isVideo = /2$/.test(comando)
  sea ​​yt = falso
  sea ​​yt2 = falso
  let usedServer = servidores[0]
  para (dejar i en servidores) {
    let servidor = servidores[i]
    tratar {
      yt = esperar yta(vid.url, servidor)
      yt2 = esperar ytv(vid.url, servidor)
      usedServer = servidor
      descanso
    } atrapar (e) {
      m.reply(`Servidor ${servidor} error!${servidores.longitud >= i + 1 ? '' : '\nmencoba servidor lain...'}`)
    }
  }
  si (yt === falso) lanza 'servidor semua gagal'
  if (yt2 === false) arroja 'servidor semua gagal'
  let {dl_link, thumb, title, tamaño de archivo, tamaño de archivoF} = yt
  espera conexión.send2ButtonLoc(m.chat, espera (espera búsqueda(pulgar)).buffer(), `
*Judul:* ${título}
*Audio de archivo de Ukuran:* ${filesizeF}
*Video de archivo de Ukuran:* ${yt2.filesizeF}
*Servidor y2mate:* ${servidorusado}
`.trim(), marca de agua, 'Audio', `.yta ${vid.url}`, 'Video', `.yt ${vid.url}`)
}
handler.help = ['play'].map(v => v + ' <pencarian>')
handler.tags = ['descargador']
manejador.comando = /^(p|reproducir)$/i

manejador.exp = 0

módulo.exportaciones = controlador
