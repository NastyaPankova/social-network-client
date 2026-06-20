import type { RootState } from '~/store/store'

export const isLoading = (state: RootState) => state.app.isLoading
export const isAuth = (state: RootState) => state.app.isAuth
