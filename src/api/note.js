import axios from 'axios'

export const serverUrl = 'https://www.feizhouxianyu.cn:8911'
// export const serverUrl = 'http://127.0.0.1:8910'

export function getAllNote () {
  return axios.get(`${serverUrl}/getAllNote`)
}

export function getTopic () {
  return axios.get(`${serverUrl}/getTopic`)
}

export function getNoteList (topic) {
  return axios.get(`${serverUrl}/getNoteList?topic=${topic}`)
}

export function getNote (id) {
  return axios.get(`${serverUrl}/getNote?id=${id}`)
}
