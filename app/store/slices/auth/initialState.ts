import type { AuthState } from '~/store/slices/auth/types'

export const initialState: AuthState = {
  user: null,
  token: null,
}
