import axios from 'axios'

const BASE_URL = import.meta.env.VITE_BASE_URL
const AUTH_TOKEN = 'Bearer ' + import.meta.env.VITE_BEARER

export const instance = axios.create({
  baseURL: BASE_URL,
})

instance.defaults.headers.common['Authorization'] = AUTH_TOKEN
