let webp2mp4 = require('../lib/webp2mp4')
let { ffmpeg } = require('../lib/converter')
let handler = async (m, { conn }) => {
    if (!m.quoted) throw 'Etiqueta un sticker o audio!'
    let mime = m.quoted.mimetype || ''
    if (!/webp|audio/.test(mime)) throw 'Etiqueta un sticker o audio!'
    let media = await m.quoted.download()
    let out = Buffer.alloc(0)
    if (/webp/.test(mime)) {
        out = await webp2mp4(media)
    } else if (/audio/.test(mime)) {
        out = await ffmpeg(media, [
            '-filter_complex', 'color',
            '-pix_fmt', 'yuv420p',
            '-crf', '51',
            '-c:a', 'copy',
            '-shortest'
        ], 'mp3', 'mp4')
    }
    await conn.sendFile(m.chat, out, 'out.mp4', null, m)
    .catch(() => { conn.reply(m.chat, `_Error! Formato incorrecto o inténtalo más tarde_`, m) })
}
handler.help = ['tovideo']
handler.tags = ['sticker']

handler.command = ['tovideo']
handler.group = true
handler.register = false

module.exports = handler
