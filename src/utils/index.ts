import cheerio from 'cheerio'

export function parseHTML(html: string) {
  const $ = cheerio.load(html)
  const result: any[]= []
   $('.mainlink a').each((_, e)=>  {
      result.push({
        title: $(e).text(),
        href: $(e).attr('href')
      })
  })
  return  result
}

export function uniqWith(arr, key: string) {
  const memo = new Map()
  return arr.filter(_ => {
    return !memo.has(_) && memo.set(_ , true)
  })
}