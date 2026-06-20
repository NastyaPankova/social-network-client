import type { RootState } from '~/store/store'

export const getCurrentUser = (state: RootState) => state.authentication.user
export const getToken = (state: RootState) => state.authentication.token
