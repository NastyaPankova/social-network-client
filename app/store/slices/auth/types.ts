import type { IUser } from '~/interfaces/IUser'

export interface AuthState {
  user: null | IUser
  token: null | string
}
