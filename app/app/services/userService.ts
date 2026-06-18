import api from '~/app/api'

export default class UserService {
  static async getUsers() {
    return api.get('/user')
  }
}
