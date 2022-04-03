import http from '../utils/http'

export default class Spider {
  urls: Array<string>
  
  constructor(urls: Array<string>) {
    this.urls = urls
  }
  
  async crawl(): Promise<any> {
    const data = await Promise.all(this.urls.map(api=> http({ method: 'GET', api })))
    return data
  }
}