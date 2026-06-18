import type { AxiosResponse } from 'axios'
import api from '~/app/api'
import type { IAuthResponse } from '~/app/interfaces/IAuthResponse'

export default class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<IAuthResponse>> {
    return api.post('/auth/login', { email, password })
  }

  static async logout(): Promise<void> {
    return api.post('/auth/logout')
  }

  static async getMe(): Promise<AxiosResponse<IAuthResponse>> {
    return api.get('/auth/me')
  }
}
