import type { IUser } from '~/app/interfaces/IUser'

export interface AuthState {
  user: null | IUser
  token: null | string
}
