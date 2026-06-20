import type { IUser } from '~/interfaces/IUser'

export interface IAuthResponse {
  accessToken: string
  user: IUser
}
