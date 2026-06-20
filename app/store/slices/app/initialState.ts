import type { AppState } from '~/store/slices/app/types'

export const initialState: AppState = {
  isLoading: false,
  isAuth: false,
  // error: null,
}
