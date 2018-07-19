import axios from 'axios'

export const baseURL = 'http://124.128.225.21:7181'
export var HTTP = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    post: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
})
