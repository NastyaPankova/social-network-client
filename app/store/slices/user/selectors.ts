import type { RootState } from '~/store/store'

export const getProfile = (state: RootState) => state.user.profile
