let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'Grup Berryy')).buffer(), `
「 Grup Berryy 」
Grup 1:
https://chat.whatsapp.com/KAHbnN7sCkrGghoVK9NjPX

Grup 2:
-
Kalau linknya gak valid/direset hubungi owner
Be A Smart People
`.trim(), wm, 'Donasi', '.donasi', m)
handler.help = ['grupbot']
handler.tags = ['info']
handler.command = /^(gcbot|grupbot|groupbot)$/i

module.exports = handler
