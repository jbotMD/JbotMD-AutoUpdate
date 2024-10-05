
import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'
import { group } from 'console'
import PhoneNumber from 'awesome-phonenumber'

/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    let wktugeneral = `${wibh}:${wibm}:${wibs}`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

/*============= MAIN INFO =============*/
global.own = [['628999079286', 'Sajisan', true]]
global.own1 = [['628999079286', 'Sajisan', true]]
global.own2 = [['6285790263784', 'Alina', true]]
global.own3 = [['855888977049', 'Apyca', true]]

global.owner = [['628999079286', 'Sajisan', true],['6285790263784', 'Alina:', true],['855888977049', 'apyca:', true]]
global.mods = []
global.prems = []
global.nomorbot = '62895356194488'
global.nomorown = '-'
global.nomorown1 = '628999079286'
global.nomorown2 = '6285790263784'
global.nomorown3 = '855888977049'
global.vowner = '-'
global.vowner1 = '628999079286'
global.vowner2 = '6285790263784'
global.vowner3 = '855888977049'

/*============= WATERMARK =============*/
global.readMore = readMore
global.author = 'Sajisan'
global.namebot = 'JbotMD'
global.wm = '© JbotMD By Sajisan'
global.watermark = wm
global.botdate = `⫹⫺ DATE: ${week} ${date}\n⫹⫺ 𝗧𝗶𝗺𝗲: ${wktuwib}`
global.bottime = `T I M E : ${wktuwib}`
global.stickpack = `Sticker Dibuat Dngn Bot Whatsapp : ${nomorbot}`
global.stickauth = `© JbotMD`
global.week = `${week} ${date}`
global.wibb = `${wktuwib}`

//*============= SOSMED =============*/
global.sgh = '-' // Github
global.sgc = '-' // Group
global.sgw = '-' // Website
global.swa = '-' // Whatsapp
global.stele = '-' // Telegram
global.sfb = '-' // Facebook
global.sig = '-' // Instagram
global.syt = '-' // Youtube


/*============= DONASI =============*/
global.pdana = '628999079286'
global.ppulsa = '628999079286'
global.psaweria = '-'


/*============= TAMPILAN =============*/
global.m1 = '┏━━━⊙►' 
global.m2 = '┇‣'
global.m3 = '┗━━━━━━━━━━━⊙►'

/*============= RESPON =============*/
global.done = `𝑫𝒐𝒏𝒆 𝑲𝒂𝒌... √`
global.succes = `𝑺𝒖𝒄𝒄𝒆𝒔 𝑲𝒂𝒌... √`
global.wait = `𝑷𝒍𝒆𝒂𝒔𝒆 𝑾𝒂𝒊𝒕...`
global.pwait = `֎ 𝑃𝑙𝑒𝑎𝑠𝑒 𝑊𝑎𝑖𝑡...`
global.psucces = `𝑫𝒐𝒏𝒆 𝑲𝒂𝒌... √\n𝑭𝒊𝒍𝒆 𝑺𝒖𝒅𝒂𝒉 𝒅𝒊𝑲𝒊𝒓𝒊𝒎𝒌𝒂𝒏 𝑴𝒆𝒍𝒂𝒍𝒖𝒊 𝑷𝒓𝒊𝒗𝒂𝒕𝒆𝑴𝒆𝒔𝒔𝒂𝒈𝒆...`
global.eror = `𝐸𝑟𝑟𝑜𝑟𝑠... 𝐶𝑜𝑏𝑎 𝑏𝑒𝑏𝑒𝑟𝑎𝑝𝑎 𝑠𝑎𝑎𝑡 𝑙𝑎𝑔𝑖...`
global.down = `𝑆𝑒𝑟𝑣𝑒𝑟 𝑆𝑒𝑑𝑎𝑛𝑔 𝐷𝑜𝑤𝑛 𝐶𝑜𝑏𝑎 𝑏𝑒𝑏𝑒𝑟𝑎𝑝𝑎 𝑆𝑎𝑎𝑡 𝑙𝑎𝑔𝑖ℎ...`
global.pc = `𝑴𝒐𝒉𝒐𝒏 𝑻𝒖𝒏𝒈𝒈𝒖 𝑺𝒂𝒎𝒑𝒂𝒊 𝑷𝒓𝒐𝒔𝒆𝒔 𝑺𝒆𝒍𝒆𝒔𝒂𝒊 𝑭𝒊𝒍𝒆 𝑨𝒌𝒂𝒏 𝒅𝒊𝑲𝒊𝒓𝒊𝒎𝒌𝒂𝒏 𝑴𝒆𝒍𝒂𝒍𝒖𝒊 𝑷𝒓𝒊𝒗𝒂𝒕𝒆𝑴𝒆𝒔𝒔𝒂𝒈𝒆...`
global.savefilemp3 = `𝑴𝒆𝒅𝒊𝒂 𝑨𝒌𝒂𝒏 𝑫𝒊𝒉𝒂𝒑𝒖𝒔 𝑶𝒕𝒐𝒎𝒂𝒕𝒊𝒔 𝑫𝒂𝒍𝒂𝒎 𝑾𝒂𝒌𝒕𝒖 24 𝑱𝒂𝒎 𝑯𝒂𝒓𝒂𝒑 𝑺𝒊𝒎𝒑𝒂𝒏 𝑫𝒊𝒑𝒆𝒓𝒂𝒏𝒈𝒌𝒂𝒕 𝑨𝒏𝒅𝒂\n\n${readMore}\n𝑪𝒂𝒓𝒂𝒏𝒚𝒂 𝑩𝒖𝒌𝒂 𝑭𝒐𝒍𝒅𝒆𝒓 𝑭𝒊𝒍𝒆𝑴𝒂𝒏𝒂𝒈𝒆𝒓/𝑾𝒉𝒂𝒕𝒔𝒂𝒑𝒑/𝑴𝒆𝒅𝒊𝒂/𝑾𝒉𝒂𝒕𝒔𝒂𝒑𝒑 𝑨𝒖𝒅𝒊𝒐/𝑷𝒓𝒊𝒗𝒂𝒕𝒆`
global.savefilemp4 = `𝑴𝒆𝒅𝒊𝒂 𝑨𝒌𝒂𝒏 𝑫𝒊𝒉𝒂𝒑𝒖𝒔 𝑶𝒕𝒐𝒎𝒂𝒕𝒊𝒔 𝑫𝒂𝒍𝒂𝒎 𝑾𝒂𝒌𝒕𝒖 24 𝑱𝒂𝒎 𝑯𝒂𝒓𝒂𝒑 𝑺𝒊𝒎𝒑𝒂𝒏 𝑫𝒊𝒑𝒆𝒓𝒂𝒏𝒈𝒌𝒂𝒕 𝑨𝒏𝒅𝒂\n\n${readMore}\n𝑪𝒂𝒓𝒂𝒏𝒚𝒂 𝑩𝒖𝒌𝒂 𝑭𝒐𝒍𝒅𝒆𝒓 𝑭𝒊𝒍𝒆𝑴𝒂𝒏𝒂𝒈𝒆𝒓/𝑾𝒉𝒂𝒕𝒔𝒂𝒑𝒑/𝑴𝒆𝒅𝒊𝒂/𝑾𝒉𝒂𝒕𝒔𝒂𝒑𝒑 𝑽𝒊𝒅𝒆𝒐/𝑷𝒓𝒊𝒗𝒂𝒕𝒆`


/*============= WEB API KEY =============*/
global.openai = 'YOUR_APIKEY_HERE'  //api key bisa didapatkan dari https://openai.com/api/
global.org = 'YOUR_APIKEY_HERE'  //openAI Organization name
global.xznkey = 'Jisan4a'

global.APIs = {
  // name: 'https://website'
  xzn : 'https://skizo.tech/'
}

global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'

  'https://skizo.tech/' : xznkey
}

global.getbuffer = async function getBuffer(url, options) {
	try {
		options ? options : {}
		var res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'User-Agent': 'GoogleBot',
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}


/*============= OTHER =============*/
global.thumb = 'https://telegra.ph/file/a7ac2b46f82ef7ea083f9.jpg' //Main Thumbnail
global.thumbnailUrl = [
  'https://telegra.ph/file/ef4b742d47e6a9115e2ff.jpg'
]
global.fla = [
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text="
]
global.flaaa2 = [
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text="
]


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

/*============= RESPON GAME =============*/
global.benar = 'Good Job! ◕◡◕'
global.salah = 'Not Bad! ◕◠◕'
global.dikit = "Dikit Lagi, Semangat!!"


/*============= RPG GAME =============*/
global.multiplier = 69 // The higher, The harder levelup
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      agility: '🤸‍♂️',
      arc: '🏹',
      armor: '🥼',
      bank: '🏦',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      bow: '🏹',
      bull: '🐃',
      cat: '🐈',
      chicken: '🐓',
      common: '📦',
      cow: '🐄',
      crystal: '🔮',
      darkcrystal: '♠️',
      diamond: '💎',
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      emerald: '💚',
      exp: '✉️',
      fishingrod: '🎣',
      fox: '🦊',
      gems: '🍀',
      giraffe: '🦒',
      gold: '👑',
      health: '❤️',
      horse: '🐎',
      intelligence: '🧠',
      iron: '⛓️',
      keygold: '🔑',
      keyiron: '🗝️',
      knife: '🔪',
      legendary: '🗃️',
      level: '🧬',
      limit: '🌌',
      lion: '🦁',
      magicwand: '⚕️',
      mana: '🪄',
      money: '💵',
      mythic: '🗳️',
      pet: '🎁',
      petFood: '🍖',
      pickaxe: '⛏️',
      pointxp: '📧',
      potion: '🥤',
      rock: '🪨',
      snake: '🐍',
      stamina: '⚡',
      strength: '🦹‍♀️',
      string: '🕸️',
      superior: '💼',
      sword: '⚔️',
      tiger: '🐅',
      trash: '🗑',
      uncommon: '🎁',
      upgrader: '🧰',
      wood: '🪵'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}
