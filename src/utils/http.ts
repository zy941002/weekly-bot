import axios, { Method } from 'axios'

interface IhttpArgs {
  api: string
  method: Method,
  headers?: any,
  data?: any
}

function http(args: IhttpArgs): Promise<any> {
  return new Promise((resolve, reject) => {
    const { api, method, headers, data } = args
    axios({
      url: api,
      method,
      headers: headers || {
        'Content-Type': 'application/json',
        'charset': 'utf-8'
      },
      data
    }).then(response=> {
      resolve(response.data)
    }).catch(err=> {
      reject(err)
    })
  })
}

export default http