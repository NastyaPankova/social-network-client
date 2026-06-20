import type { IUser } from '~/interfaces/IUser'

export interface AuthenticationState {
  user: null | IUser
  token: null | string
}
