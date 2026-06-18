import type { AppState } from '~/app/store/slices/app/types'

export const initialState: AppState = {
  isLoading: false,
  isAuth: false,
  // error: null,
}
