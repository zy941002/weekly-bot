import gradient from "gradient-string"
import chalk from "chalk"
import dotenv from 'dotenv'

import Bot from './models/Bot'
import Spider from './models/Spider'

import { parseHTML, uniqWith } from './utils'
import  salt from './utils/salt'

dotenv.config()

const { WEB_HOOKS, WEB_HOOKS_SCRETT } = process.env

const turboGradient = gradient("#0099F7", "#F11712")

enum Websites {
  JavaScript = 'https://javascriptweekly.com/issues/latest?layout=bare',
  Node = 'https://nodeweekly.com/issues/latest?layout=bare',
  React = 'https://react.statuscode.com/issues/latest?layout=bare',
}

function creatDingBot() {
  const timestamp = Date.now()
  const signStr = `&timestamp=${timestamp}&sign=${salt(WEB_HOOKS_SCRETT,  `${timestamp}\n${WEB_HOOKS_SCRETT}`)}`
  return new Bot(`${WEB_HOOKS}&sign=${signStr}`) 
}

async function main() {
  console.log(chalk.bold(turboGradient(`\n >>>helper is begin work<<<\n `)))
  const weekySpider = new Spider(Object.values(Websites))
  const weeklys = await weekySpider.crawl()

  const dingBot = creatDingBot()
  const results = uniqWith(weeklys.map(parseHTML).flat(2), 'title')
  
  dingBot.sendMsg(`## Weekly for frontend 卷王\n` + results.map(({ title, href }) => `* [${title}](${href})`).join('\n'))
  console.log(chalk.bold(turboGradient(`\n >>>The job is done<<<\n `)))
}

main()




