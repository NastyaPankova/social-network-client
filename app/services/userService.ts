import api from '~/api'
import type { IUser } from '~/interfaces/IUser'
import type { AxiosResponse } from 'axios'

export default class UserService {
  static async getUsers() {
    return api.get('/user')
  }

  static async getUserById(id: string): Promise<AxiosResponse<IUser>> {
    return await api.get<IUser>(`/user/${id}`)
  }
}
