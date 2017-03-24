import Promise from 'bluebird'
import 'fetch-polyfill'

const API_BASE_URL = process.env.API_BASE_URL

const initRequestHeader = (method='get', data, token) => {

  const body = data ? JSON.stringify(data) : undefined

  let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  if(token)
    headers.Authorization = `Bearer ${token}`

  return {
    method,
    headers,
    body
  }

}

const startRequest = (url, data) => {
  return new Promise((resolve, reject) => {
    fetch(url,data)
    .then(response => {
      const {status, statusText} = response
      if(status === 200){
        return resolve(response.json())
      }
      else {
        return reject(response.json())
      }
    })
    .catch(err => {
      return reject(err)
    })
  })
}

const login = () => {
  const url = `${API_BASE_URL}/mort/login`
  const request = initRequestHeader('post', {
    email: "zhangyi@bigeyedata.com",
    password: "password"
  })
  return startRequest(url, request)

}

async function requestData(method, url, data) {

  try{
    const token = sessionStorage.getItem('token')
    if(!token) {
      const loginInfo = await login()
      loginInfo && sessionStorage.setItem('token', loginInfo.token)
    }
    const request = initRequestHeader(method, data, sessionStorage.getItem('token'))
    return startRequest(`${API_BASE_URL}${url}`, request)
    // return startRequest(`${url}`, request)
  }
  catch(err) {
    Promise.reject(err)
  }
}

function syncRequestData(method, url, data) {

  try{
    const request = initRequestHeader(method, data, sessionStorage.getItem('token'))
    return startRequest(`${API_BASE_URL}${url}`, request)
    // return startRequest(`${url}`, request)
  }
  catch(err) {
    Promise.reject(err)
  }
}

export async function get(url, data) {
  return requestData('get', url, data)
}


export async function post(url, data) {
  return requestData('post', url, data)
}

export function syncGet(url, data) {
  return syncRequestData('get', url, data)
}

export function syncPost(url, data) {
  return syncRequestData('post', url, data)
}
