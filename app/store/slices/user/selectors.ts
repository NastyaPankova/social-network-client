import type { RootState } from '~/store/store'

export const getUserProfile = (state: RootState) => state.user.userProfile
