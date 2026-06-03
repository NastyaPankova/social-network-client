import type { RootState } from '~/app/store/store'

export const isLoading = (state: RootState) => state.auth.isLoading
