import { chromium } from 'playwright-core'

const exe = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome'
const browser = await chromium.launch({ executablePath: exe, args: ['--no-sandbox'] })
const page = await browser.newPage({ viewport: { width: 1280, height: 900 }, deviceScaleFactor: 2 })
await page.goto('http://127.0.0.1:4174/', { waitUntil: 'networkidle' })
// scroll até a seção equipe para disparar as animações
await page.evaluate(() => document.querySelector('#equipe')?.scrollIntoView())
await page.waitForTimeout(1800)
const el = await page.$('#equipe')
await el.screenshot({ path: '/tmp/equipe-desktop.png' })

// versão mobile
const page2 = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 })
await page2.goto('http://127.0.0.1:4174/', { waitUntil: 'networkidle' })
await page2.evaluate(() => document.querySelector('#equipe')?.scrollIntoView())
await page2.waitForTimeout(1800)
const el2 = await page2.$('#equipe')
await el2.screenshot({ path: '/tmp/equipe-mobile.png' })

await browser.close()
console.log('screenshots OK')
