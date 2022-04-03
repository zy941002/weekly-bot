import gradient from "gradient-string"
import chalk from "chalk"
import Bot from './models/Bot'
import Spider from './models/Spider'

import { parseHTML, uniqWith } from './utils'

enum Websites {
  JavaScript = 'https://javascriptweekly.com/issues/latest?layout=bare',
  Node = 'https://nodeweekly.com/issues/latest?layout=bare',
  React = 'https://react.statuscode.com/issues/latest?layout=bare',
}



const turboGradient = gradient("#0099F7", "#F11712", "#0099F7")
const weekySpider = new Spider(Object.values(Websites))

console.log(
  chalk.bold(turboGradient(`\n >>>begin work<<<\n `))
)

const weeklys = await weekySpider.crawl()

const results = uniqWith(weeklys.map(parseHTML).flat(2), 'title')
console.log(results)

console.log(
  chalk.bold(turboGradient(`\n >>>The job is done<<<\n `))
)
