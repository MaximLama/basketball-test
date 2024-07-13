import http from '@/api/http/http'
import type RegisterRequest from '@/api/dto/auth/RegisterRequest'
import type UserResponse from '@/api/dto/auth/UserResponse'

async function register(requestData: RegisterRequest): Promise<UserResponse> {
  return (await http.post('Auth/SignUp', requestData)).data
}

export { register }
