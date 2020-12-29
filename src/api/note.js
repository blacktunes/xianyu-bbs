import axios from 'axios'

export const serverUrl = 'https://feizhouxianyu.cn/api/bbs'
// export const serverUrl = 'http://127.0.0.1:8910'

export function getAllNote () {
  return axios.get(`${serverUrl}/get_all_note`)
}

export function getTopic () {
  return axios.get(`${serverUrl}/get_topic`)
}

export function getNoteList (topic) {
  return axios.get(`${serverUrl}/get_note_list?topic=${topic}`)
}

export function getNote (id) {
  return axios.get(`${serverUrl}/get_note?id=${id}`)
}
