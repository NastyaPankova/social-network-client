import type { IUser } from '~/app/interfaces/IUser'

export interface IAuthResponse {
  accessToken: string
  refreshToken: string
  user: IUser
}
