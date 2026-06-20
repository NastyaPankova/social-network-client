import type { AuthenticationState } from '~/store/slices/authentication/types'

export const initialState: AuthenticationState = {
  user: null,
  token: null,
}
