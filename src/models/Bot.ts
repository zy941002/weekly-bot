/**
 * 机器人
 */
import http from '../utils/http'

interface IParams {
  msgtype: string
  text: {
    content: string,
    mentioned_list?: Array<string>
  }
}

class Bot  {
  private botKey: string

  constructor(botKey) {
    this.botKey = botKey
  }

  async sendMsg(msg: string): Promise<any> {
    const data = await http({
      api: this.botKey,
      method: 'POST',
      data: {
        msgtype: 'markdown',
        markdown: {
          title: this.constructor.name,
          text: msg
        }        
      }
    })
    console.log(data)
    return data
  }
}

export default Bot


 