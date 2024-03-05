// - - مرحبا قم بتعديل الكونفيغ على طريقتك قم باإضافة رقمك وحسابتك على مواقع التواصل الإجتماعي - -
//شكرا لى NOUREDDINE 

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'

/*============= WAKTU =============*/
let wibh = moment.tz('morocco/marrakech').format('HH')
    let wibm = moment.tz('morocco/marrakech').format('mm')
    let wibs = moment.tz('morocco/marrakech').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
      
    
/*============== مواقع التواصل ==============*/

// قم بإضافة حسابتك في هاذه الخاناة التالية
global.sig = 'https://instagram.com/itx_ahmad.ali' //رابط الإنستجرام
global.sgh = 'https://github.com/xIKRATOSx' //رابط github الخاص بك
global.sgc = 'https://chat.whatsapp.com/DxIb5oWzpg24mmg9D9zw5Y' رابط مجموعتك على واتساب
global.sdc = '-' //إذا عندك رابط ديسكورد قم باإضافته هنا

/*============== الأرقام ==============*/
global.nomorbot = '68673045381' //Omar
global.nomorown = '923470027813' //Jitossa



/*============== STAFF ==============*/
global.owner = [
  ['923470027813', 'OMAR🎐', true] //don't change this name and number
  ['19293514545', 'JITOSSA🎐', false] //Replace your name and number here
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = ['923470027813',''] //Don't replace this,If you want to add someone add any dev
global.prems = [] // Premium user is not here to add it, type .addprem @ user 10

global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.lolkeysapi = ['BrunoSobrino']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.lolkey = 'apikeymu'
global.xkey = 'APIKEYMU'
global.cricket_URL = 'https://m.cricbuzz.com/live-cricket-scores/56782/pak-vs-nz-new-zealand-tour-of-pakistan-2023' //paste new live match url here
/*============== API ==============*/
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  ana: 'https://anabotofc.herokuapp.com/',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  violetics : 'https://violetics.pw',
  zenz: 'https://zenzapi.xyz',
  males : 'https://malesin.xyz',
  fgmods: 'https://api-fgmods.ddns.net',
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'APIKEYMU',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://api.lolhuman.xyz': 'Apikeymu',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://zenzapi.xyz': '01ABEB1E11',
  'https://violetics.pw': 'beta',
  'https://api-fgmods.ddns.net': 'fg-dylux'
}
// لاتقم بالتغيير على الخاناة تحت 

/*============== WATERMARK ==============*/
global.wm = '「 JITOSAA 🧃」' //إسم البوت الخاص بك
global.footerTXT = `JITOSSA 🧃• ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ\nowner: +92 347 0027813`
global.fig = `Follow me on instagram:\n\t\tinstagram.com/ovmar_1`
global.botdate = `⫹⫺ Date: ${week} ${date}`
global.bottime = `Time : ${wktuwib}`
global.titlebot = 'JITOSSA 🧃'
global.author = global.wm
global.logo = 'https://i.ibb.co/cc8jfkX/01.jpg'




/*============== FlamingText ===========*/
global.flaaa = [
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=', 
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='] 

/*============== قم باإضافة رسالة الإنتظار هنا ==============*/
global.wait = '```「▰▰▰▱▱▱▱▱▱▱」JITOSSA...```'
global.eror = '```404 خطأ```'
global.dtu = 'الإنستجران'
global.dtc = 'صاحب البوت'
global.phn = '+92 347 0027813'

/*=========== لاتغير أي شئ ===========*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'
global.djson = 'application/json'

global.thumbdoc = 'https://i.ibb.co/cc8jfkX/01.jpg'

/*=========== FAKE SIZE ===========*/
global.fsizedoc = '5644' // default 10TB
global.fpagedoc = '999'


/*============== STICKER WM ==============*/
global.stickpack = 'JITOSSA'
global.stickauth = `「 JITOSSA 」`
global.packname = 'البوت من طرف'
global.packname2 = 'البوت من طرف عمر شراف'

global.multiplier = 38 // The higher, The harder levelup

/*============== EMOJI ==============*/
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '📊',
      limit: '🎫',
      health: '❤️',
      exp: '✨',
      money: '💹',
      bank: '🏦',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🛍️',
      mythic: '🎁',
      legendary: '🗃️',
      superior: '💼',
      pet: '🔖',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      pickaxe: '⛏️',
      fishingrod: '🎣',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐴',
      cat: '🐱',
      dog: '🐶',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '🪙',
      emerald: '❇️',
      upgrader: '🧰'
      
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

//------ FUNCTION
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
