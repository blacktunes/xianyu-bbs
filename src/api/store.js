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

export function getShowNoteList () {
  return axios({
    method: 'get',
    url: `${serverUrl2}/getShowNoteList`
  })
}

export function getNote (topic, id) {
  return axios({
    method: 'post',
    url: `${serverUrl2}/getNote`,
    params: {
      topic,
      id
    }
  })
}

export function getTopic () {
  return axios({
    method: 'get',
    url: `${serverUrl2}/getTopic`
  })
}

export function addNote (form) {
  return axios({
    method: 'post',
    url: `${serverUrl2}/addNote`,
    params: {
      title: form.title,
      author: form.author,
      topic: form.topic,
      text: form.text
    }
  })
}

export function editNote (form) {
  return axios({
    method: 'post',
    url: `${serverUrl2}/editNote`,
    params: {
      id: form.id,
      title: form.title,
      author: form.author,
      topic: form.topic,
      text: form.text
    }
  })
}

export function getNoteList (topic) {
  return axios({
    method: 'post',
    url: `${serverUrl2}/getNoteList`,
    params: {
      topic
    }
  })
}

export function getBookNameList () {
  return axios({
    method: 'get',
    url: `${serverUrl2}/getBookNameList`
  })
}

export function getBookList (bookName) {
  return axios({
    method: 'post',
    url: `${serverUrl2}/getBookList`,
    params: {
      bookName
    }
  })
}

export function getAllNote () {
  return axios({
    method: 'get',
    url: `${serverUrl2}/getAllNote`
  })
}
