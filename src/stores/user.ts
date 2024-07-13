import type RegisterRequest from '@/api/dto/auth/RegisterRequest'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { register as registerRequest } from '@/api/auth/register'
import { login as loginRequest } from '@/api/auth/login'
import type LoginRequest from '@/api/dto/auth/LoginRequest'

interface User {
  name: string
  avatarUrl: string
  isAuthorized: boolean
}

export const useUserStore = defineStore('user', () => {
  const token = localStorage.getItem('token')
  const name = localStorage.getItem('name')
  const avatarUrl = localStorage.getItem('avatarUrl')

  const user = ref<User>({
    name: name ? JSON.parse(name) : '',
    avatarUrl: avatarUrl ? JSON.parse(avatarUrl) : '',
    isAuthorized: token !== null && JSON.parse(token).length > 0
  })

  function setUser(name: string, avatarUrl: string) {
    user.value.name = name
    user.value.avatarUrl = avatarUrl
  }

  function authorize() {
    user.value.isAuthorized = true
  }

  async function register(user: RegisterRequest) {
    const userResponse = await registerRequest(user)
    setUser(userResponse.name || '', userResponse.avatarUrl || '')
    authorize()
    return userResponse
  }

  function logout() {
    user.value.name = ''
    user.value.avatarUrl = ''
    user.value.isAuthorized = false
  }

  async function login(user: LoginRequest) {
    const userResponse = await loginRequest(user)
    setUser(userResponse.name || '', userResponse.avatarUrl || '')
    authorize()
    return userResponse
  }

  return { user, register, logout, login }
})
