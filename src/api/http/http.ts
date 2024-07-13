import axios, { isAxiosError } from 'axios'
import router from '@/router'
import { RouteNamesEnum } from '@/router/router.types'

const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 1000
})

http.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token')
    ? JSON.parse(localStorage.getItem('token') as string)
    : ''
  config.headers.Authorization = token ? `Bearer ${token}` : ''
  return config
})

http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (isAxiosError(error)) {
      if (
        error.response?.status === 401 &&
        router.currentRoute.value.name != RouteNamesEnum.signin
      ) {
        router.push({ name: RouteNamesEnum.signin })
      }
    }
    return Promise.reject(error)
  }
)

export default http
