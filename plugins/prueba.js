let { MessageType } = require('@adiwajshing/baileys')
let qrcode = require('qrcode')

if (global.conns instanceof Array) console.log()// for (let i of global.conns) global.conns[i] && global.conns[i].user ? global.conns[i].close().then(() => delete global.conns[id] && global.conns.splice(i, 1)).catch(global.conn.logger.error) : delete global.conns[i] && global.conns.splice(i, 1)
else global.conns = []

let handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {
  if (!global.db.data.settings[conn.user.jid].jadibot) return conn.sendButton(m.chat, 'serbot está inactivo', '', isOwner ? `Aktifkan` : `Owner`, isOwner ? `${usedPrefix}1 jadibot` : `${usedPrefix}owner`, m)
  let parent = args[0] && args[0] == 'plz' ? conn : global.conn
  let auth = false
handler.customPrefix = /^(jair)$/i
handler.command = new RegExp
handler.private = false
handler.group = true

module.exports = handler