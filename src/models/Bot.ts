/**
 * 机器人
 */
import http from '../utils/http'

interface IParams {
  msgtype: string
  text: {
    content: string,
    mentioned_list: Array<string>
  }
}

class Bot  {
  private botKey: string
  private domin: string

  constructor(botKey: string, domin: string) {
    this.botKey = botKey
    this.domin = domin
  }

  getSendInfo (msg: string, members: Array<string>): IParams {
    return  {
      msgtype: 'text',
      text: {
        content: msg,
        mentioned_list: members
      }
    }
  }

  async sendMsg(msg: string, members: Array<string>): Promise<any> {
    const data = await http({
      api: `${this.domin}?key=${this.botKey}`,
      method: 'POST',
      data: this.getSendInfo(msg, members)
    })
    return data
  }
}

export default Bot