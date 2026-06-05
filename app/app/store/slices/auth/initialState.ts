import type { AuthState } from '~/app/store/slices/auth/types'

export const initialState: AuthState = {
  user: null,
  token: null,
}
