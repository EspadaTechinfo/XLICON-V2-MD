import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'

// Global variables
global.owner = [
  ['27688338288', '𝙺𝙴ͥ𝙽ͣ𝚃ᷟ𝙴𝙽𝚂𝙷𝙸⍣楤⁩', true], 
  ['27695815823', '⁨𝙄𝘾𝙃𝙄𝙂𝙊☾⁩ -(5PHESIHLE)', true], 
  ['27710200228', 'OLD NUMBER', true],
  ['27712345678', 'YOUR MOMS NUMBER', true]
] 

global.mods = ['27695815823','27688338288', '27710200228', '27712345678', '27712000093'] 
global.prems = ['27695815823', '27688338288', '27710200228', '27712345678']
global.allowed = ['27695815823', '27688338288', '27710200228', '27712345678']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = global.keysZens[Math.floor(global.keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = global.keysxteammm[Math.floor(global.keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = global.keysneoxrrr[Math.floor(global.keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']
global.beta = 'mLxstUwm'

global.APIs = {
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}

global.APIKeys = { 
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': global.keysneoxr,
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': global.keysxxx, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = '𝙂𝙀𝙏𝙎𝙐𝙂𝘼 𝙏𝙀𝙉𝙎𝙃𝙊𝙐'
global.premium = 'true'
global.packname = '𝙏𝙚𝙖𝙢 𝙏𝙀𝙉𝙎𝙃𝙊𝙐' 
global.author = '@kurosakiIchigo' 
global.menuvid = 'https://files.catbox.moe/va51uv.mp4'
global.igfg = '▢✓ Follow Our channel\nhttps://whatsapp.com/channel/0029Vayxd786mYPMFMVB9A3Y\n' 
global.dygp = 'https://chat.whatsapp.com/CicqD04sNCJ37j13LiI51p'
global.fgsc = 'https://github.com/EspadaTechinfo/GETSUGA-XMD' 
global.fgyt = 'https://youtube.com/shorts/NrIhJMhKhY0?si=PgTgcz_Bk2xvcK3o'
global.fgpyp = 'https://youtube.com/shorts/NrIhJMhKhY0?si=PgTgcz_Bk2xvcK3o'
global.fglog = 'XLICON.jpg' 
global.thumb = fs.readFileSync('./XLICON.jpg')

global.wait = '*🕣 _GETSUGA IS LOADING..._*\n*▰▰▰▱▱▱▱▱⭐*'
global.rwait = '🤧'
global.dmoji = '🤭'
global.done = '✔️'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
