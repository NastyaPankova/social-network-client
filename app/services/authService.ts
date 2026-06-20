import type { AxiosResponse } from 'axios'
import api from '~/api'
import type { IAuthResponse } from '~/interfaces/IAuthResponse'

export default class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<IAuthResponse>> {
    return api.post('/auth/login', { email, password })
  }

  static async registration(
    name: string,
    email: string,
    password: string
  ): Promise<AxiosResponse<IAuthResponse>> {
    return api.post('/auth/registration', { name, email, password })
  }

  static async logout(): Promise<void> {
    return api.post('/auth/logout')
  }

  static async getMe(): Promise<AxiosResponse<IAuthResponse>> {
    return api.get('/auth/me')
  }
}
