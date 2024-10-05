import fs from "fs"
import os from "os"
import axios from "axios"
import chalk from "chalk"
import { format } from "util"
import path, { join } from "path"
import fetch from "node-fetch"
import { spawn } from "child_process"
import { unwatchFile, watchFile, readFileSync } from "fs"
import moment from "moment-timezone"
import ffmpeg from "fluent-ffmpeg"
import { fileURLToPath } from "url"
import https from "https"
import qs from "qs"

import { smsg } from './lib/simple.js'
import knights from "knights-canvas"

/**
 * @type {import('@adiwajshing/baileys')}
 */
 
const { proto } = (await import('@adiwajshing/baileys')).default
const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
    clearTimeout(this)
    resolve()
}, ms))

/**
 * Handle messages upsert
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['messages.upsert']} groupsUpdate 
 */

export async function handler(chatUpdate) {
    this.msgqueque = this.msgqueque || []
    if (!chatUpdate) return
    
    this.pushMessage(chatUpdate.messages).catch(console.error)
    let m = chatUpdate.messages[chatUpdate.messages.length - 1]
    if (!m) return
    
    if (global.db.data == null)
        await global.loadDatabase()
    try {
        m = smsg(this, m) || m
        if (!m) return
        
        m.exp = 0
        m.limit = false
        try {
            // TODO: use loop to insert data instead of this
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object')
                global.db.data.users[m.sender] = {}
            if (user) {
                // User
                if (!isNumber(user.exp)) user.exp = 0
                if (!('registered' in user)) user.registered = false
                if (!('name' in user)) user.name = ''
                if (!isNumber(user.age)) user.age = 0
                if (!isNumber(user.star)) user.star = 0
                if (!isNumber(user.level)) user.level = 0
                if (!isNumber(user.money)) user.money = 0
                if (!isNumber(user.limit)) user.limit = 0
                if (!isNumber(user.ticket)) user.ticket = 0
                if (!isNumber(user.ticketA)) user.ticketA = 0
                if (!isNumber(user.ticketS)) user.ticketS = 0
                if (!isNumber(user.ticketX)) user.ticketX = 0
                if (!('atm' in user)) user.atm = false
                if (!isNumber(user.bank)) user.bank = 0
                if (!isNumber(user.saldo)) user.saldo = 0
                
                // Status
                if (!isNumber(user.lastHit)) user.lastHit = 0
                if (!isNumber(user.lastHits)) user.lastHits = 0
                if (!('junior' in user)) user.junior = true
                if (!('senior' in user)) user.senior = false
                if (!('contributor' in user)) user.contributor = false
                if (!('premium' in user)) user.premium = false
                if (!('freOwner' in user)) user.freOwner = false
                if (!('owner' in user)) user.owner = false
                if (!('develofer' in user)) user.develofer = false
                
                // Pelanggaran
                if (!isNumber(user.toxic)) user.toxic = 0
                if (!isNumber(user.spam)) user.spam = 0
                if (!('banned' in user)) user.banned = false
                if (!isNumber(user.lastBanned)) user.lastBanned = 0
                if (!('afk' in user)) user.afk = false
                if (!isNumber(user.lastAfk)) user.lastAfk = 0
                
                
                // Game Inventory RPG
                if (!isNumber(user.heroes)) user.heroes = 0
                if (!isNumber(user.skil)) user.skil = 0
                if (!isNumber(user.skin)) user.skin = 0
                if (!isNumber(user.health)) user.health = 0
                if (!isNumber(user.mobility)) user.mobility = 0
                if (!isNumber(user.durability)) user.durability = 0
                if (!isNumber(user.attackPower)) user.attackPower = 0
                if (!isNumber(user.helmet)) user.helmet = 0
                if (!isNumber(user.weapon)) user.weapon = 0
                if (!isNumber(user.defense)) user.defense = 0
                
                if (!('petBoolean' in user)) user.petBoolean = false
                if (!isNumber(user.petlock)) user.petlock = 0
                if (!isNumber(user.pet)) user.pet = 0
                if (!isNumber(user.petHp)) user.petHp = 0
                if (!isNumber(user.petPower)) user.petPower = 0
                if (!isNumber(user.petCondition)) user.petCondition = 0
                
                if (!('plantBoolean' in user)) user.plantBoolean = false
                if (!isNumber(user.plantlock)) user.plantlock = 0
                if (!isNumber(user.plant)) user.plant = 0
                if (!isNumber(user.plantT)) user.plantT = 0
                if (!isNumber(user.plantL)) user.plantL = 0
                if (!isNumber(user.plantH)) user.plantH = 0
                if (!isNumber(user.plantCondition)) user.plantCondition = 0
                
                if (!isNumber(user.gold)) user.gold = 0
                if (!isNumber(user.wbox)) user.wbox = 0
                if (!isNumber(user.diamond)) user.diamond = 0
                if (!isNumber(user.potion)) user.potion = 0
                if (!isNumber(user.buruanS)) user.buruanS = 0
                if (!isNumber(user.buruanK)) user.buruanK = 0
                if (!isNumber(user.buruanB)) user.buruanB = 0
                if (!isNumber(user.buruanR)) user.buruanR = 0
                if (!isNumber(user.buruanQ)) user.buruanQ = 0
                if (!isNumber(user.botol)) user.botol = 0
                if (!isNumber(user.kardus)) user.kardus = 0
                if (!isNumber(user.kayubakar)) user.kayubakar = 0
                if (!isNumber(user.dungeon)) user.dungeon = 0
                
                //Mining
                if (!isNumber(user.crypto)) user.crypto = 0
                if (!isNumber(user.mining)) user.mining = 0
                if (!isNumber(user.miningOut)) user.miningOut = 0
                
                // Sider
                if (!('sdr' in user)) user.atm = false
                if (!isNumber(user.sider)) user.sider = 0
                
                // Last Cooldown
                if (!isNumber(user.lastclaim)) user.lastcClaim = 0
                
            } else
                global.db.data.users[m.sender] = {
                    exp: 0,
                    registered: false,
                    name: m.name,
                    age: 0,
                    star: 0,
                    starS: '',
                    level: 1,
                    levelS: '',
                    money: 500,
                    limit: 100,
                    ticket: 0,
                    ticketA: 0,
                    ticketS: 0,
                    ticketX: 0,
                    atm: false,
                    bank: 500,
                    saldo: 0,
                    
                    
                    lastHit: 0,
                    lastHits: 0,
                    junior: true,
                    senior: false,
                    contributor: false,
                    premium: false,
                    freOwner: false,
                    owner: false,
                    develofer: false,
                    statuses: '',
                    
                    toxic: 0,
                    spam: 0,
                    banned: false,
                    lastBanned: -1,
                    bannedReason: '',
                    afk: false,
                    lastAfk: -1,
                    afkReason: '',
                    
                    
                    heroes: 1,
                    heroesS: '',
                    skil: 0,
                    skilS: '',
                    skin: 0,
                    skinS: '',
                    health: 150,
                    healthS: '',
                    mobility: 0,
                    mobilityS: '',
                    durability: 0,
                    durabilityS: '',
                    attackPower: 0,
                    attackPowerS: '',
                    helmet: 0,
                    helmetS: '',
                    weapon: 0,
                    weaponS: '',
                    defense: 0,
                    defenseS: '',
                    
                    petBoolean: false,
                    petlock: 0,
                    pet: 0,
                    petS: '',
                    petHp: 0,
                    petHpS: '',
                    petPower: 0,
                    petPowerS: '',
                    petCondition: 0,
                    petConditionS: '',
                    
                    plantBoolean: false,
                    plantlock: 0,
                    plant: 0,
                    plantS: '',
                    plantT: 0,
                    plantL: 0,
                    plantH: 0,
                    plantCondition: 0,
                    plantConditionS: '',
                    
                    gold: 0,
                    wbox: 0,
                    diamond: 0,
                    potion: 0,
                    buruanS: 0,
                    buruanK: 0,
                    buruanB: 0,
                    buruanR: 0,
                    buruanQ: 0,
                    botol: 0,
                    kardus: 0,
                    kayubakar: 0,
                    
                    dungeon: 0,
                    dungeonS: '',
                    
                    crypto: 0,
                    cryptoS: '',
                    mining: 0,
                    miningS: '',
                    miningOut: 0,
                    miningOutS: '',
                    
                    sdr: false,
                    sider: 0,
                    siderS: '',
                    siderReason: '',
                    
                    lastClaim: 0,
                }
            let chat = global.db.data.chats[m.chat]
            if (typeof chat !== 'object')
                global.db.data.chats[m.chat] = {}
            if (chat) {
                if (!('welcome' in chat)) chat.welcome = false
                if (!('detect' in chat)) chat.detect = false
                if (!('sWelcome' in chat)) chat.sWelcome = ''
                if (!('sBye' in chat)) chat.sBye = ''
                if (!('antiDelete' in chat)) chat.antiDelete = false
                if (!('antiLink' in chat)) chat.antiLink = false
                if (!('antiLink2' in chat)) chat.antiLink2 = false
                if (!('antiAllLink' in chat)) chat.antiAllLink = false
                if (!('antiSider' in chat)) chat.antiSider = false
                if (!('antiSpam' in chat)) chat.antiSpam = false
                if (!('antiStiker' in chat)) chat.antiStiker = false
                if (!('antiLuar62' in chat)) chat.antiLuar62 = false
                if (!("isBanned" in chat)) chat.isBanned = false
                if (!isNumber(chat.expired)) chat.expired = 0
                if (!isNumber(chat.db)) chat.db = 0
            } else 
                global.db.data.chats[m.chat] = {
                    welcome: false,
                    detect: false,
                    sWelcome: '',
                    sBye: '',
                    antiDelete: false,
                    antiLink: false,
                    antiLink2: false,
                    antiAllLink: false,
                    antiSider: false,
                    antiSpam: false,
                    antiStiker: false,
                    antiLuar62: false,
                    isBanned: false,
                    expired: 0,
                    db: 0,
                }
            let settings = global.db.data.settings[this.user.jid]
            if (typeof settings !== 'object') global.db.data.settings[this.user.jid] = {}
            if (settings) {
                if (!('self' in settings)) settings.self = false
                if (!('autoread' in settings)) settings.autoread = false
                if (!('restrict' in settings)) settings.restrict = false
                if (!('anticall' in settings)) settings.anticall = true
                if (!('restartDB' in settings)) settings.restartDB = 0
            } else global.db.data.settings[this.user.jid] = {
                self: false,
                autoread: false,
                anticall: true,
                restartDB: 0,
                restrict: false
            }
        } catch (e) {
            console.error(e)
        }
        if (opts['nyimak'])
            return
        if (!m.fromMe && opts['self'])
            return
        if (opts['pconly'] && m.chat.endsWith('g.us'))
            return
        if (opts['gconly'] && !m.chat.endsWith('g.us'))
            return
        if (opts['owneronly'] && !m.chat.startsWith(`${global.nomorown}`))
            return
        if (opts['swonly'] && m.chat !== 'status@broadcast')
            return
        if (typeof m.text !== 'string')
            m.text = ''
        const isOwn = [conn.decodeJid(global.conn.user.id), ...global.own.map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isOwn2 = [conn.decodeJid(global.conn.user.id), ...global.own2.map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isJunior = global.db.data.users[m.sender].junior
        const isSenior = global.db.data.users[m.sender].junior && global.db.data.users[m.sender].senior
        const isContributor = global.db.data.users[m.sender].junior && global.db.data.users[m.sender].senior && global.db.data.users[m.sender].contributor
        const isPremium = global.db.data.users[m.sender].junior && global.db.data.users[m.sender].senior && global.db.data.users[m.sender].contributor && global.db.data.users[m.sender].premium
        const isFreOwner = global.db.data.users[m.sender].junior && global.db.data.users[m.sender].senior && global.db.data.users[m.sender].contributor && global.db.data.users[m.sender].premium && global.db.data.users[m.sender].freOwner
        const isOwner = [conn.decodeJid(global.conn.user.id), ...global.owner.map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || m.fromMe
        const isROwner2 = isOwn2
        const isROwner = isOwn
        //const isOwner = global.db.data.users[m.sender].junior && global.db.data.users[m.sender].senior && global.db.data.users[m.sender].contributor && global.db.data.users[m.sender].owner
        //const isDevelofer = global.db.data.users[m.sender].junior && global.db.data.users[m.sender].senior && global.db.data.users[m.sender].contributor && global.db.data.users[m.sender].owner && global.db.data.users[m.sender].develofer
        if (isROwner) {
          global.db.data.users[m.sender].junior = true
          global.db.data.users[m.sender].senior = true
          global.db.data.users[m.sender].contributor = true
          global.db.data.users[m.sender].premium = true
          global.db.data.users[m.sender].freOwner = true
          global.db.data.users[m.sender].owner = true
          global.db.data.users[m.sender].develofer = true
          //global.db.data.users[m.sender].money = 15000000
          //global.db.data.users[m.sender].ticket = 15
          //global.db.data.users[m.sender].limit = 1500
        }
        if (isROwner2) {
          global.db.data.users[m.sender].junior = true
          global.db.data.users[m.sender].senior = true
          global.db.data.users[m.sender].contributor = true
          global.db.data.users[m.sender].premium = true
          global.db.data.users[m.sender].freOwner = true
          global.db.data.users[m.sender].owner = true
          global.db.data.users[m.sender].develofer = true
          //global.db.data.users[m.sender].money = 15000000
          //global.db.data.users[m.sender].ticket = 15
          //global.db.data.users[m.sender].limit = 1500
        }
        if (isOwner) {
          global.db.data.users[m.sender].junior = true
          global.db.data.users[m.sender].senior = true
          global.db.data.users[m.sender].contributor = true
          global.db.data.users[m.sender].premium = true
          global.db.data.users[m.sender].freOwner = true
          global.db.data.users[m.sender].owner = true
          //global.db.data.users[m.sender].money = 15000000
          //global.db.data.users[m.sender].ticket = 15
          //global.db.data.users[m.sender].limit = 1500
        }
        
        
        if (!isOwner && !m.fromMe && opts['self']) return;
        if (opts['queque'] && m.text && !(isOwn || isROwner)) {
            let queque = this.msgqueque, time = 1000 * 5
            const previousID = queque[queque.length - 1]
            queque.push(m.id || m.key.id)
            setInterval(async function () {
                if (queque.indexOf(previousID) === -1) clearInterval(this)
                await delay(time)
            }, time)
        }

        if (m.isBaileys)
            return
        m.exp += Math.ceil(Math.random() * 10)

        let usedPrefix
        let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]
        const groupMetadata = (m.isGroup ? ((conn.chats[m.chat] || {}).metadata || await this.groupMetadata(m.chat).catch(_ => null)) : {}) || {}
        const participants = (m.isGroup ? groupMetadata.participants : []) || []
        const user = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) === m.sender) : {}) || {} // User Data
        const bot = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) == this.user.jid) : {}) || {} // Your Data
        const isRAdmin = user?.admin == 'superadmin' || false
        const isAdmin = isRAdmin || user?.admin == 'admin' || false // Is User Admin?
        const isBotAdmin = bot?.admin || false // Are you Admin?

        const ___dirname = path.join(path.dirname(fileURLToPath(import.meta.url)), './plugins')
        for (let name in global.plugins) {
            let plugin = global.plugins[name]
            if (!plugin)
                continue
            if (plugin.disabled)
                continue
            const __filename = join(___dirname, name)
            if (typeof plugin.all === 'function') {
                try {
                    await plugin.all.call(this, m, {
                        chatUpdate,
                        __dirname: ___dirname,
                        __filename
                    })
                } catch (e) {
                    // if (typeof e === 'string') continue
                    console.error(e)
                    for (let [jid] of global.own.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                        let data = (await conn.onWhatsApp(jid))[0] || {}
                        if (data.exists)
                            m.reply(`*Plugin:* ${name}\n*Sender:* ${m.sender}\n*Chat:* ${m.chat}\n*Command:* ${m.text}\n\n\`\`\`${format(e)}\`\`\``.trim(), data.jid)
                    }
                }
            }

            if (!opts['restrict'])
                if (plugin.tags && plugin.tags.includes('admin')) {
                    // global.dfail('restrict', m, this)
                    continue
                }
            const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
            let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix
            let match = (_prefix instanceof RegExp ? // RegExp Mode?
                [[_prefix.exec(m.text), _prefix]] :
                Array.isArray(_prefix) ? // Array?
                    _prefix.map(p => {
                        let re = p instanceof RegExp ? // RegExp in Array?
                            p :
                            new RegExp(str2Regex(p))
                        return [re.exec(m.text), re]
                    }) :
                    typeof _prefix === 'string' ? // String?
                        [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
                        [[[], new RegExp]]
            ).find(p => p[1])
            if (typeof plugin.before === 'function') {
                if (await plugin.before.call(this, m, {
                    match,
                    conn: this,
                    groupMetadata,
                    participants,
                    user,
                    bot,
                    isRAdmin,
                    isAdmin,
                    isBotAdmin,
                    isJunior,
                    isSenior,
                    isContributor,
                    isPremium,
                    isFreOwner,
                    isOwner,
                    isROwner2,
                    isROwner,
                    chatUpdate,
                    __dirname: ___dirname,
                    __filename
                }))
                    continue
            }
            if (typeof plugin !== 'function')
                continue
            if ((usedPrefix = (match[0] || '')[0])) {
                let noPrefix = m.text.replace(usedPrefix, '')
                let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
                args = args || []
                let _args = noPrefix.trim().split` `.slice(1)
                let text = _args.join` `
                command = (command || '').toLowerCase()
                let fail = plugin.fail || global.dfail // When failed
                let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
                    plugin.command.test(command) :
                    Array.isArray(plugin.command) ? // Array?
                        plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
                            cmd.test(command) :
                            cmd === command
                        ) :
                        typeof plugin.command === 'string' ? // String?
                            plugin.command === command :
                            false

                if (!isAccept)
                    continue
                m.plugin = name
                if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
                    let chat = global.db.data.chats[m.chat]
                    let user = global.db.data.users[m.sender]
                    if (&& name != 'Exec.js' && name != 'Exec2.js' && chat?.banned)
                        return // Except this
                    if (name != 'Unban.js' && user?.banned)
                        return
                }
                
                if (plugin.disable && !(isROwner || isOwner)) { // Bot number
                    fail('disable', m, this)
                    continue
                }
                if (plugin.register == true && _user.registered == false) { // Butuh daftar?
                    fail('unreg', m, this)
                    continue
                }
                if (plugin.group && !m.isGroup) { // Group Chat Only
                    fail('group', m, this)
                    continue
                } else if (plugin.admin && !isAdmin) { // Admin
                    fail('admin', m, this)
                    continue
                } else if (plugin.botAdmin && !isBotAdmin) { // Bot Admin
                    fail('botAdmin', m, this)
                    continue
                }
                if (plugin.private && m.isGroup) { // Private Chat Only
                    fail('private', m, this)
                    continue
                }
                if (plugin.junior && !isJunior) { // Junior user
                    fail('junior', m, this)
                    continue
                }
                if (plugin.senior && !isSenior) { // Senior user
                    fail('senior', m, this)
                    continue
                }
                if (plugin.contributor && !isContributor) { // Contributor user
                    fail('contributor', m, this)
                    continue
                }
                if (plugin.premium && !isPremium) { // Premium user
                    fail('premium', m, this)
                    continue
                }
                if (plugin.owner && !isOwner) { // Owner
                    fail('owner', m, this)
                    continue
                }
                if (plugin.rowner && !isROwner) { // ROwner
                    fail('rowner', m, this)
                    continue
                }
                
                m.isCommand = true
                let xp = 'exp' in plugin ? parseInt(plugin.exp) : 17 // XP Earning per command
                if (xp > 200)
                    m.reply('Ngecit -_-') // Hehehe
                else
                    m.exp += xp
                if (plugin.limit && global.db.data.users[m.sender].limit < plugin.limit) {
                    this.reply(m.chat, `*Limit Kamu Habis*`, m)
                    continue // Limit habis
                }
                if (plugin.level > _user.level) {
                    this.reply(m.chat, `*Diperlukan level ${plugin.level} untuk menggunakan Fitur ini`, m)
                    continue // If the level has not been reached
                }
                
                let isGc = m.isGroup
                let isPc = m.isGroup && isBotAdmin
                
                let extra = {
                    match,
                    conn: this,
                    text,
                    args,
                    _args,
                    user,
                    bot,
                    usedPrefix,
                    command,
                    noPrefix,
                    groupMetadata,
                    participants,
                    isGc,
                    isPc,
                    isRAdmin,
                    isAdmin,
                    isBotAdmin,
                    isJunior,
                    isSenior,
                    isContributor,
                    isPremium,
                    isFreOwner,
                    isOwner,
                    isROwner2,
                    isROwner,
                    chatUpdate,
                    __dirname: ___dirname,
                    __filename
                }
                try {
                    await plugin.call(this, m, extra)
                    //if (!isPremium) m.limit = m.limit || plugin.limit || false
                } catch (e) {
                    // Error occured
                    m.error = e
                    console.error(e)
                    if (e) {
                        let text = format(e)
                        for (let key of Object.values(global.APIKeys))
                            text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')
                        if (e.name)
                            for (let [jid] of global.own.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                                let data = (await conn.onWhatsApp(jid))[0] || {}
                                if (data.exists)
                                    m.reply(`*🗂️ Plugin:* ${m.plugin}\n*👤 Sender:* ${m.sender}\n*💬 Chat:* ${m.chat}\n*💻 Command:* ${usedPrefix}${command} ${args.join(' ')}\n📄 *Error Logs:*\n\n\`\`\`${text}\`\`\``.trim(), data.jid)
                            }
                        m.reply(text)
                    }
                } finally {
                    // m.reply(util.format(_user))
                    if (typeof plugin.after === 'function') {
                        try {
                            await plugin.after.call(this, m, extra)
                        } catch (e) {
                            console.error(e)
                        }
                    }
                    if (m.limit)
                        throw false
                }
                break
            }
        }
    } catch (e) {
        console.error(e)
    } finally {
        if (opts['queque'] && m.text) {
            const quequeIndex = this.msgqueque.indexOf(m.id || m.key.id)
            if (quequeIndex !== -1)
                this.msgqueque.splice(quequeIndex, 1)
        }
        //console.log(global.db.data.users[m.sender])
        let user, stats = global.db.data.stats
        if (m) {
            if (m.sender && (user = global.db.data.users[m.sender])) {
                user.exp += m.exp
                user.limit -= m.limit * 1
            }
            let stat
            if (m.plugin) {
                let now = +new Date
                if (m.plugin in stats) {
                    stat = stats[m.plugin]
                    if (!isNumber(stat.total))
                        stat.total = 1
                    if (!isNumber(stat.success))
                        stat.success = m.error != null ? 0 : 1
                    if (!isNumber(stat.last))
                        stat.last = now
                    if (!isNumber(stat.lastSuccess))
                        stat.lastSuccess = m.error != null ? 0 : now
                } else
                    stat = stats[m.plugin] = {
                        total: 1,
                        success: m.error != null ? 0 : 1,
                        last: now,
                        lastSuccess: m.error != null ? 0 : now
                    }
                stat.total += 1
                stat.last = now
                if (m.error == null) {
                    stat.success += 1
                    stat.lastSuccess = now
                }
            }
        }
        try {
            if (!opts['noprint']) await (await import(`./lib/print.js`)).default(m, this)
        } catch (e) {
            console.log(m, m.quoted, e)
        }
        if (opts['autoread'])
            await conn.readMessages([m.key])
    }
}
/**
 * Handle groups participants update
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['group-participants.update']} groupsUpdate 
 */
export async function participantsUpdate({ id, participants, action }) {
    if (opts['self'])
        return
    // if (id in conn.chats) return // First login will spam
    if (this.isInit)
        return
    if (global.db.data == null)
        await loadDatabase()
    let chat = global.db.data.chats[id] || {}
    let text = ''
    switch (action) {
        case "add":
        case "remove":
        if (chat.welcome) {
                const groupMetadata = await this.groupMetadata(id) || (this.chats[id] || {}).metadata;
                for (let user of participants) {
                    const isWekam = action === "add";
                    const welcomeText = isWekam ? (chat.sWelcome || this.welcome || conn.welcome || '' ).replace("@subject", await this.getName(id)).replace("@desc", groupMetadata.desc?.toString()) :
                      false // (chat.sBye || this.bye || conn.bye || '' );
       
                await this.sendMessage(id, {text: welcomeText.replace('@user', '@' + participants[0].split('@')[0])})
       
              
              }
           }
            break
        case 'promote':
            text = (chat.sPromote || this.spromote || conn.spromote || '@user ```is now Admin```')
        case 'demote':
            if (!text)
                text = (chat.sDemote || this.sdemote || conn.sdemote || '@user ```is no longer Admin```')
            text = text.replace('@user', '@' + participants[0].split('@')[0])
            if (chat.detect)
                this.sendMessage(id, { text, mentions: this.parseMention(text) })
            break
    }
}

/**
 * Handler groups update
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['groups.update']} groupsUpdate 
 */
export async function groupsUpdate(groupsUpdate) {
    if (opts['self'])
        return
    for (const groupUpdate of groupsUpdate) {
        const id = groupUpdate.id
        if (!id) continue
        let chats = global.db.data.chats[id], text = ''
        if (!chats?.detect) continue
        if (groupUpdate.desc) text = (chats.sDesc || this.sDesc || conn.sDesc || '```Description has been changed to```\n@desc').replace('@desc', groupUpdate.desc)
        if (groupUpdate.subject) text = (chats.sSubject || this.sSubject || conn.sSubject || '```Subject has been changed to```\n@subject').replace('@subject', groupUpdate.subject)
        if (groupUpdate.icon) text = (chats.sIcon || this.sIcon || conn.sIcon || '```Icon has been changed to```').replace('@icon', groupUpdate.icon)
        if (groupUpdate.revoke) text = (chats.sRevoke || this.sRevoke || conn.sRevoke || '```Group link has been changed to```\n@revoke').replace('@revoke', groupUpdate.revoke)
        if (groupUpdate.announce == true) text = (chats.sAnnounceOn || this.sAnnounceOn || conn.sAnnounceOn || '*Group has been closed!*')
        if (groupUpdate.announce == false) text = (chats.sAnnounceOff || this.sAnnounceOff || conn.sAnnounceOff || '*Group has been open!*')
        if (groupUpdate.restrict == true) text = (chats.sRestrictOn || this.sRestrictOn || conn.sRestrictOn || '*Group has been all participants!*')
        if (groupUpdate.restrict == false) text = (chats.sRestrictOff || this.sRestrictOff || conn.sRestrictOff || '*Group has been only admin!*')
        if (!text) continue
        this.reply(id, text.trim(), m)
    }
}

export async function deleteUpdate(message) {
    try {
        const { fromMe, id, participant } = message
        if (fromMe)
            return
        let msg = this.serializeM(this.loadMessage(id))
        if (!msg)
            return
        let chat = global.db.data.chats[msg.chat] || {}
        if (chat.delete)
            return false
        //this.copyNForward(msg.chat, msg).catch(e => console.log(e, msg))
    } catch (e) {
        console.error(e)
    }
}

global.dfail = (type, m, conn) => {
    let msg = {
        restrict: '*Restrict Off...*',
        disable: '*Command Ini Telah diMatikan Oleh Aowner*',
        unreg: 'Sebelum Menggunakan Bot Harap Daftar Ke Data User Terlebih Dahulu\n\nSilahkan Ketik : .daftar Nama.Umur',
        group: '*Command Ini Hanya Dapat diAkses Melalui Group Chats Silahkan Join :*\n\n*Group Utama*\nhttps://chat.whatsapp.com/LMlzg2z0rZn437SrvXPhIg\n\n*Group Chats*\nhttps://chat.whatsapp.com/GJOignNEEWoCOgeGwJcqnh\n\n#jbotMD',
        admin: '*Ups... Kamu Bukan Atmins*',
        botAdmin: '*Ups... Jbotzs Bukan Atmins*',
        private: '*Command Ini Hanya Dapat diAkses Melalui Private Chats*',
        junior: '*Command Ini Hanya Untuk Junior User*',
        seniors: '*Command Ini Hanya Untuk Senior User*',
        contributors: '*Command Ini Hanya Untuk Contributor User*',
        premium: '*Command Ini Hanya Untuk Premium User',
        owner: '*Command Ini Hanya Untuk Owner Jbot*',
        rowner: '*Command Ini Hanya Untuk Develofer Jbot*',
    }[type]
    if (msg) return conn.reply(m.chat, msg, m)
}

let file = global.__filename(import.meta.url, true)
watchFile(file, async () => {
    unwatchFile(file)
    console.log(chalk.redBright("Update 'handler.js'"))
    if (global.reloadHandler) console.log(await global.reloadHandler())
})