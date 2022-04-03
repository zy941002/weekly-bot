/**
 * 机器人
 */
import http from '../utils/http'
import salt from '../utils/salt'

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

// curl 'https://oapi.dingtalk.com/robot/send?access_token=0c37425b7c89384ce1b9857240c41e675f01afc4beee035b864bfce188550326' \
//  -H 'Content-Type: application/json' \
//  -d '{"msgtype": "markdown","text": {"content":"我就是我, 是不一样的烟火"}}'

 