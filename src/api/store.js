import axios from 'axios'

export const serverUrl = 'https://www.feizhouxianyu.cn:4001'
export const serverUrl2 = 'https://www.feizhouxianyu.cn:4003'
// export const serverUrl2 = 'http://127.0.0.1:4000'

export function messageList () {
  return axios({
    method: 'get',
    url: `${serverUrl}/messageList`,
    params: {
      id: 0
    }
  })
}

export function getMessage () {
  return axios({
    method: 'get',
    url: `${serverUrl2}/getMessage`
  })
}
