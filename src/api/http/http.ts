import axios from 'axios'

const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

http.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token')
  config.headers.Authorization = token ? `Bearer ${token}` : ''
  return config
})

http.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
)

export default http
