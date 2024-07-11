import type RegisterRequest from '@/api/dto/requests/RegisterRequest'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { register as registerRequest } from '@/api/auth/register'
import { login as loginRequest } from '@/api/auth/login'
import type LoginRequest from '@/api/dto/requests/LoginRequest'

interface User {
  name: string
  avatarUrl: string
  isAuthorized: boolean
}

export const useUserStore = defineStore('user', () => {
  const token = localStorage.getItem('token')
  const user = ref<User>({
    name: localStorage.getItem('name') || '',
    avatarUrl: localStorage.getItem('avatarUrl') || '',
    isAuthorized: token !== null && token.length > 0
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
