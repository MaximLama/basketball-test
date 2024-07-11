import http from '@/api/http/http'
import type RegisterRequest from '@/api/dto/requests/RegisterRequest'
import type UserResponse from '@/api/dto/responses/UserResponse'

async function register(requestData: RegisterRequest): Promise<UserResponse> {
  return (await http.post('Auth/SignUp', requestData)).data
}

export { register }
