import http from '@/api/http/http'
import type LoginRequest from '@/api/dto/auth/LoginRequest'
import type UserResponse from '@/api/dto/auth/UserResponse'

async function login(requestData: LoginRequest): Promise<UserResponse> {
  return (await http.post('Auth/SignIn', requestData)).data
}

export { login }
